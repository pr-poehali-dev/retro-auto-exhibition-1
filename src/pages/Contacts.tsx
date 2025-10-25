import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { toast } from 'sonner';

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Сообщение отправлено!', {
      description: 'Мы свяжемся с вами в ближайшее время'
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const contacts = [
    {
      icon: 'Phone',
      title: 'Телефон',
      value: '+7 (495) 123-45-67',
      link: 'tel:+74951234567'
    },
    {
      icon: 'Mail',
      title: 'Email',
      value: 'info@retroauto.ru',
      link: 'mailto:info@retroauto.ru'
    },
    {
      icon: 'MapPin',
      title: 'Адрес',
      value: 'Москва, ул. Выставочная, 1',
      link: 'https://maps.google.com'
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
            Контакты
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in">
            Свяжитесь с нами любым удобным способом
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h2 className="text-3xl font-bold mb-8">Напишите нам</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Имя
                </label>
                <Input
                  id="name"
                  placeholder="Ваше имя"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Сообщение
                </label>
                <Textarea
                  id="message"
                  placeholder="Ваше сообщение..."
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>
              <Button type="submit" size="lg" className="w-full">
                Отправить сообщение
              </Button>
            </form>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold mb-8">Как с нами связаться</h2>
            
            <div className="space-y-4">
              {contacts.map((contact, index) => (
                <Card key={index} className="border-border/50 hover-scale">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon name={contact.icon as any} size={24} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{contact.title}</h3>
                        <a 
                          href={contact.link}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {contact.value}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="border-border/50 bg-muted/30 mt-8">
              <CardHeader>
                <CardTitle>Режим работы</CardTitle>
                <CardDescription>
                  Мы работаем для вас каждый день
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Понедельник - Воскресенье</span>
                  <span className="font-semibold">10:00 - 20:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Кассы закрываются</span>
                  <span className="font-semibold">19:30</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
