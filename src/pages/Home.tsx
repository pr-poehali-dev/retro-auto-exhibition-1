import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Home = () => {
  const cars = [
    {
      id: 1,
      name: 'Chevrolet Bel Air 1957',
      year: '1957',
      description: 'Легендарный американский автомобиль эпохи chrome-age',
      image: 'https://cdn.poehali.dev/projects/430c0dbb-03d7-4494-9510-bfcd13becbc8/files/d94a0c0e-7730-434a-8cc4-04b0b4183901.jpg'
    },
    {
      id: 2,
      name: 'Ford Mustang 1967',
      year: '1967',
      description: 'Классический маслкар первого поколения',
      image: 'https://cdn.poehali.dev/projects/430c0dbb-03d7-4494-9510-bfcd13becbc8/files/119a877f-8ac8-4af9-a929-a33b98ffe5f7.jpg'
    },
    {
      id: 3,
      name: 'Volkswagen Beetle 1963',
      year: '1963',
      description: 'Культовый немецкий компактный автомобиль',
      image: 'https://cdn.poehali.dev/projects/430c0dbb-03d7-4494-9510-bfcd13becbc8/files/935220df-5729-451f-b31d-381f048dbf09.jpg'
    },
    {
      id: 4,
      name: 'Mercedes-Benz 300SL',
      year: '1954',
      description: 'Спортивное купе с крыльями-чайками',
      image: 'https://cdn.poehali.dev/projects/430c0dbb-03d7-4494-9510-bfcd13becbc8/files/30580c97-609e-4b96-ab82-e72f05c8e1db.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-background" />
        <div className="relative z-10 text-center px-4 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
            Ретро Авто
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Выставка классических автомобилей 1950-1970х годов
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/tickets">
              <Button size="lg" className="text-lg px-8">
                Купить билет
              </Button>
            </Link>
            <Link to="/events">
              <Button size="lg" variant="outline" className="text-lg px-8">
                События
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Экспонаты</h2>
          <p className="text-muted-foreground text-lg">
            Коллекция раритетных автомобилей золотой эры
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cars.map((car) => (
            <Card 
              key={car.id} 
              className="overflow-hidden hover-scale border-0 bg-card/50 backdrop-blur"
            >
              <div className="aspect-square bg-muted overflow-hidden">
                <img 
                  src={car.image} 
                  alt={car.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Icon name="Calendar" size={16} className="text-primary" />
                  <span className="text-sm text-muted-foreground">{car.year}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{car.name}</h3>
                <p className="text-muted-foreground text-sm">{car.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div className="animate-fade-in">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Icon name="MapPin" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Москва, ЦВК</h3>
              <p className="text-muted-foreground">Центральный выставочный комплекс</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Icon name="Clock" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Ежедневно</h3>
              <p className="text-muted-foreground">10:00 - 20:00</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Icon name="Ticket" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">От 500₽</h3>
              <p className="text-muted-foreground">Билеты онлайн и на месте</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;