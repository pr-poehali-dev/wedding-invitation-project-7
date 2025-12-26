import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cream via-white to-cream py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-white shadow-2xl border-2 border-gold/20 overflow-hidden">
          <div className="h-2 bg-gradient-to-r from-transparent via-gold to-transparent"></div>
          
          <div className="text-center py-12 px-8 animate-fade-in">
            <div className="flex justify-center items-center gap-4 mb-6">
              <div className="h-px w-16 bg-gold"></div>
              <Icon name="Heart" className="text-gold" size={32} />
              <div className="h-px w-16 bg-gold"></div>
            </div>
            
            <h1 className="font-cormorant text-6xl md:text-7xl text-forest mb-4 font-bold">
              Приглашение
            </h1>
            <p className="text-gold text-xl font-cormorant italic">
              на торжество по случаю бракосочетания
            </p>
          </div>

          <Separator className="my-8 bg-gold/20" />

          <div className="px-8 md:px-16 py-8 animate-fade-in">
            <div className="flex items-center gap-3 mb-4">
              <Icon name="Sparkles" className="text-gold" size={24} />
              <h2 className="font-cormorant text-3xl text-forest font-semibold">
                Дорогие гости!
              </h2>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">
              Мы рады пригласить вас разделить с нами один из самых важных 
              и счастливых дней нашей жизни. Ваше присутствие на нашей свадьбе 
              будет для нас особенно дорогим и значимым.
            </p>
          </div>

          <Separator className="my-8 bg-gold/20" />

          <div className="px-8 md:px-16 py-8 animate-fade-in">
            <div className="flex items-center gap-3 mb-6">
              <Icon name="Users" className="text-gold" size={24} />
              <h2 className="font-cormorant text-3xl text-forest font-semibold">
                Имена молодоженов
              </h2>
            </div>
            <div className="text-center py-8 bg-cream/30 rounded-lg">
              <p className="font-cormorant text-5xl text-forest mb-2">
                Илья & Дарья
              </p>
              <p className="text-gold text-lg font-cormorant italic">
                становятся мужем и женой
              </p>
            </div>
          </div>

          <Separator className="my-8 bg-gold/20" />

          <div className="px-8 md:px-16 py-8 animate-fade-in">
            <div className="flex items-center gap-3 mb-6">
              <Icon name="Calendar" className="text-gold" size={24} />
              <h2 className="font-cormorant text-3xl text-forest font-semibold">
                Дата и время
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-cream/30 p-6 rounded-lg text-center">
                <Icon name="CalendarDays" className="text-gold mx-auto mb-3" size={32} />
                <p className="text-2xl font-cormorant text-forest font-semibold mb-2">
                  15 июля 2025 года
                </p>
                <p className="text-gray-600">Суббота</p>
              </div>
              <div className="bg-cream/30 p-6 rounded-lg text-center">
                <Icon name="Clock" className="text-gold mx-auto mb-3" size={32} />
                <p className="text-2xl font-cormorant text-forest font-semibold mb-2">
                  16:00
                </p>
                <p className="text-gray-600">Начало торжества</p>
              </div>
            </div>
          </div>

          <Separator className="my-8 bg-gold/20" />

          <div className="px-8 md:px-16 py-8 animate-fade-in">
            <div className="flex items-center gap-3 mb-6">
              <Icon name="MapPin" className="text-gold" size={24} />
              <h2 className="font-cormorant text-3xl text-forest font-semibold">
                Место проведения
              </h2>
            </div>
            <div className="bg-cream/30 p-8 rounded-lg">
              <p className="text-2xl font-cormorant text-forest font-semibold mb-3">
                Ресторан "Усадьба"
              </p>
              <p className="text-gray-700 mb-4 text-lg">
                г. Москва, Ленинградский проспект, д. 25
              </p>
              <div className="flex items-start gap-2 text-gray-600">
                <Icon name="Info" className="text-gold mt-1 flex-shrink-0" size={20} />
                <p>
                  Просим вас прибыть на 15 минут раньше указанного времени
                </p>
              </div>
            </div>
          </div>

          <Separator className="my-8 bg-gold/20" />

          <div className="px-8 md:px-16 py-8 animate-fade-in">
            <div className="flex items-center gap-3 mb-6">
              <Icon name="Shirt" className="text-gold" size={24} />
              <h2 className="font-cormorant text-3xl text-forest font-semibold">
                Дресс-код
              </h2>
            </div>
            <div className="bg-cream/30 p-8 rounded-lg">
              <p className="text-xl font-cormorant text-forest font-semibold mb-4">
                Классический вечерний стиль
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="flex items-start gap-3">
                  <div className="w-4 h-4 rounded-full bg-forest mt-1.5"></div>
                  <div>
                    <p className="font-semibold text-forest mb-1">Для мужчин:</p>
                    <p className="text-gray-600">Костюм, смокинг или фрак с галстуком или бабочкой</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-4 h-4 rounded-full bg-gold mt-1.5"></div>
                  <div>
                    <p className="font-semibold text-forest mb-1">Для женщин:</p>
                    <p className="text-gray-600">Вечернее платье или элегантный костюм</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-white rounded border border-gold/20">
                <p className="text-gray-700 italic flex items-start gap-2">
                  <Icon name="Sparkles" className="text-gold mt-0.5 flex-shrink-0" size={18} />
                  Рекомендуемые оттенки: изумрудный, золотой, шампань, бордовый
                </p>
              </div>
            </div>
          </div>

          <Separator className="my-8 bg-gold/20" />

          <div className="px-8 md:px-16 py-8 animate-fade-in">
            <div className="flex items-center gap-3 mb-6">
              <Icon name="Gift" className="text-gold" size={24} />
              <h2 className="font-cormorant text-3xl text-forest font-semibold">
                О подарках
              </h2>
            </div>
            <div className="bg-cream/30 p-8 rounded-lg">
              <p className="text-gray-700 leading-relaxed text-lg mb-4">
                Ваше присутствие — уже лучший подарок для нас! Однако, если вы 
                хотите порадовать нас, мы будем благодарны за финансовую помощь 
                в создании нашего семейного очага.
              </p>
              <div className="flex items-start gap-2 text-gray-600 italic">
                <Icon name="Heart" className="text-gold mt-1 flex-shrink-0" size={20} />
                <p>
                  На торжестве будет подготовлен специальный конверт для ваших пожеланий
                </p>
              </div>
            </div>
          </div>

          <Separator className="my-8 bg-gold/20" />

          <div className="px-8 md:px-16 py-8 animate-fade-in">
            <div className="flex items-center gap-3 mb-6">
              <Icon name="MessageCircle" className="text-gold" size={24} />
              <h2 className="font-cormorant text-3xl text-forest font-semibold">
                Важно
              </h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-4 bg-cream/30 rounded-lg">
                <Icon name="Check" className="text-gold mt-1 flex-shrink-0" size={20} />
                <p className="text-gray-700">
                  Просим подтвердить ваше присутствие до 1 июля 2025 года
                </p>
              </div>
              <div className="flex items-start gap-3 p-4 bg-cream/30 rounded-lg">
                <Icon name="Phone" className="text-gold mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="text-gray-700 mb-1">
                    По всем вопросам обращайтесь:
                  </p>
                  <p className="text-forest font-semibold">+7 (999) 123-45-67</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center py-12 px-8 bg-gradient-to-b from-transparent to-cream/50">
            <div className="flex justify-center items-center gap-4 mb-4">
              <div className="h-px w-16 bg-gold"></div>
              <Icon name="Heart" className="text-gold" size={28} />
              <div className="h-px w-16 bg-gold"></div>
            </div>
            <p className="font-cormorant text-2xl text-forest italic">
              С любовью и нетерпением ждём встречи с вами!
            </p>
          </div>

          <div className="h-2 bg-gradient-to-r from-transparent via-gold to-transparent"></div>
        </Card>
      </div>
    </div>
  );
};

export default Index;