import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Tickets = () => {
  const tickets = [
    {
      id: 1,
      name: 'Базовый',
      price: '500₽',
      features: [
        'Вход на выставку',
        'Просмотр всех экспонатов',
        'Аудиогид',
      ]
    },
    {
      id: 2,
      name: 'Премиум',
      price: '1200₽',
      features: [
        'Все из базового',
        'Экскурсия с гидом',
        'Буклет выставки',
        'Фотосессия с авто',
      ],
      popular: true
    },
    {
      id: 3,
      name: 'VIP',
      price: '2500₽',
      features: [
        'Все из премиум',
        'Приоритетный вход',
        'Частная экскурсия',
        'Возможность посидеть в авто',
        'Встреча с коллекционерами',
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="relative bg-gradient-to-b from-primary/10 to-background py-20">
        <div className="container mx-auto px-4 text-center">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors">
            <Icon name="ArrowLeft" size={20} />
            На главную
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Билеты
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in">
            Выберите подходящий тариф для посещения выставки
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tickets.map((ticket) => (
            <Card 
              key={ticket.id}
              className={`relative hover-scale ${
                ticket.popular 
                  ? 'border-primary shadow-lg shadow-primary/20' 
                  : 'border-border/50'
              }`}
            >
              {ticket.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Популярный
                  </span>
                </div>
              )}
              <CardHeader className="text-center pb-8 pt-8">
                <CardTitle className="text-2xl mb-2">{ticket.name}</CardTitle>
                <CardDescription className="text-4xl font-bold text-foreground">
                  {ticket.price}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {ticket.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Icon 
                        name="Check" 
                        size={20} 
                        className="text-primary mt-0.5 flex-shrink-0" 
                      />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className="w-full mt-6" 
                  variant={ticket.popular ? "default" : "outline"}
                  size="lg"
                >
                  Купить билет
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Card className="max-w-3xl mx-auto border-border/50 bg-muted/30">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4">Групповые билеты</h3>
              <p className="text-muted-foreground mb-6">
                Для групп от 10 человек действуют специальные условия. 
                Скидка до 30% на все категории билетов.
              </p>
              <Link to="/contacts">
                <Button variant="outline" size="lg">
                  Связаться с нами
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Tickets;
