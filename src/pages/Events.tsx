import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Events = () => {
  const events = [
    {
      id: 1,
      title: 'Открытие выставки',
      date: '15 ноября 2025',
      time: '18:00',
      description: 'Торжественное открытие ретро-выставки с участием коллекционеров и экспертов автомобильной истории',
      type: 'Церемония',
      icon: 'PartyPopper'
    },
    {
      id: 2,
      title: 'Мастер-класс по реставрации',
      date: '20 ноября 2025',
      time: '14:00',
      description: 'Профессиональные реставраторы покажут процесс восстановления классических автомобилей',
      type: 'Мастер-класс',
      icon: 'Wrench'
    },
    {
      id: 3,
      title: 'Встреча коллекционеров',
      date: '25 ноября 2025',
      time: '16:00',
      description: 'Обмен опытом владельцев ретро-автомобилей, истории коллекций, советы по уходу',
      type: 'Встреча',
      icon: 'Users'
    },
    {
      id: 4,
      title: 'Лекция об истории автомобилестроения',
      date: '30 ноября 2025',
      time: '15:00',
      description: 'Эксперт расскажет о развитии автомобильной промышленности 1950-1970х годов',
      type: 'Лекция',
      icon: 'BookOpen'
    },
    {
      id: 5,
      title: 'Детский день на выставке',
      date: '5 декабря 2025',
      time: '11:00',
      description: 'Интерактивная программа для детей: викторины, конкурсы рисунков, фотозона',
      type: 'Семейное',
      icon: 'Heart'
    },
    {
      id: 6,
      title: 'Показ документальных фильмов',
      date: '10 декабря 2025',
      time: '17:00',
      description: 'Кинопоказ фильмов об истории легендарных автомобильных брендов',
      type: 'Кинопоказ',
      icon: 'Film'
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
            События
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in">
            Программа мероприятий выставки ретро-автомобилей
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto space-y-6">
          {events.map((event) => (
            <Card 
              key={event.id}
              className="hover-scale border-border/50 overflow-hidden"
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="flex-shrink-0 w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon name={event.icon as any} size={28} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <CardTitle className="text-2xl">{event.title}</CardTitle>
                        <Badge variant="secondary" className="text-xs">
                          {event.type}
                        </Badge>
                      </div>
                      <CardDescription className="text-base">
                        {event.description}
                      </CardDescription>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex items-center gap-6 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Icon name="Calendar" size={18} className="text-primary" />
                    <span className="font-medium">{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Clock" size={18} className="text-primary" />
                    <span className="font-medium">{event.time}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="max-w-4xl mx-auto mt-12 border-border/50 bg-muted/30">
          <CardContent className="p-8 text-center">
            <Icon name="Info" size={40} className="text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-3">Участие в событиях</h3>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Все мероприятия включены в стоимость билета. Для участия в мастер-классах 
              рекомендуется предварительная регистрация.
            </p>
            <div className="flex gap-3 justify-center">
              <Link to="/tickets">
                <Badge className="text-sm px-4 py-2 cursor-pointer hover:bg-primary/90">
                  Купить билет
                </Badge>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Events;
