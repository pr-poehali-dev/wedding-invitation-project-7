import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <Card className="bg-white shadow-sm border border-sage/10 overflow-hidden">
          
          <div className="text-center py-16 px-8 animate-fade-in">
            <h1 className="font-sans text-5xl md:text-6xl text-dark-green mb-3 font-light tracking-wide">
              Приглашение
            </h1>
            <p className="text-sage text-base font-light tracking-widest uppercase">
              на свадьбу
            </p>
          </div>

          <Separator className="my-4 bg-sage/10" />

          <div className="px-8 md:px-16 py-12 animate-fade-in">            
            <div className="mb-12 relative overflow-hidden">
              <img 
                src="https://cdn.poehali.dev/files/8DL-pCqgTr9W5CCzQFRVAZjlh51MTWeTcXRfpQhxS7LTdqWiQnl3nnSmu6v428HVHsG5LeK29IJBxypJn7sDzn_W.jpg" 
                alt="Илья и Дарья"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-green/70 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 text-center py-10 px-4">
                <p className="font-sans text-4xl md:text-5xl text-white mb-1 font-light tracking-wide">
                  Илья & Дарья
                </p>
              </div>
            </div>
            
            <p className="text-gray-600 leading-relaxed text-base font-light text-center max-w-xl mx-auto">
              Мы рады пригласить вас разделить с нами один из самых важных 
              и счастливых дней нашей жизни
            </p>
          </div>

          <Separator className="my-4 bg-sage/10" />

          <div className="px-8 md:px-16 py-12 animate-fade-in">
            <h2 className="font-sans text-2xl text-dark-green mb-8 font-light text-center tracking-wide">
              Дата и время
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <div className="text-center py-8 border-t border-sage/20">
                <p className="text-3xl font-light text-dark-green mb-2">
                  15 июля 2025
                </p>
                <p className="text-sm text-gray-500 uppercase tracking-widest">Суббота</p>
              </div>
              <div className="text-center py-8 border-t border-sage/20">
                <p className="text-3xl font-light text-dark-green mb-2">
                  16:00
                </p>
                <p className="text-sm text-gray-500 uppercase tracking-widest">Начало торжества</p>
              </div>
            </div>
          </div>

          <Separator className="my-4 bg-sage/10" />

          <div className="px-8 md:px-16 py-12 animate-fade-in">
            <h2 className="font-sans text-2xl text-dark-green mb-8 font-light text-center tracking-wide">
              Место проведения
            </h2>
            <div className="text-center max-w-xl mx-auto space-y-3">
              <p className="text-2xl font-light text-dark-green">
                Ресторан "Усадьба"
              </p>
              <p className="text-gray-600 font-light">
                г. Москва, Ленинградский проспект, д. 25
              </p>
              <p className="text-sm text-gray-500 pt-4">
                Просим вас прибыть на 15 минут раньше
              </p>
            </div>
          </div>

          <Separator className="my-4 bg-sage/10" />

          <div className="px-8 md:px-16 py-12 animate-fade-in">
            <h2 className="font-sans text-2xl text-dark-green mb-8 font-light text-center tracking-wide">
              Дресс-код
            </h2>
            <div className="text-center max-w-xl mx-auto space-y-6">
              <p className="text-lg font-light text-dark-green">
                Классический вечерний стиль
              </p>
              <div className="grid md:grid-cols-2 gap-8 pt-6">
                <div className="space-y-2">
                  <p className="font-light text-dark-green text-sm uppercase tracking-widest">Для мужчин</p>
                  <p className="text-gray-600 text-sm font-light">Костюм, смокинг или фрак</p>
                </div>
                <div className="space-y-2">
                  <p className="font-light text-dark-green text-sm uppercase tracking-widest">Для женщин</p>
                  <p className="text-gray-600 text-sm font-light">Вечернее платье или костюм</p>
                </div>
              </div>
              <p className="text-sage text-sm pt-4 font-light italic">
                Рекомендуемые оттенки: изумрудный, бежевый, шампань
              </p>
            </div>
          </div>

          <Separator className="my-4 bg-sage/10" />

          <div className="px-8 md:px-16 py-12 animate-fade-in">
            <h2 className="font-sans text-2xl text-dark-green mb-8 font-light text-center tracking-wide">
              О подарках
            </h2>
            <div className="text-center max-w-xl mx-auto">
              <p className="text-gray-600 leading-relaxed font-light mb-4">
                Ваше присутствие — уже лучший подарок для нас. Если вы 
                хотите порадовать нас, мы будем благодарны за финансовую помощь 
                в создании нашего семейного очага.
              </p>
            </div>
          </div>

          <Separator className="my-4 bg-sage/10" />

          <div className="px-8 md:px-16 py-12 animate-fade-in">
            <div className="text-center max-w-xl mx-auto space-y-6">
              <p className="text-gray-600 font-light text-sm">
                Просим подтвердить ваше присутствие до 1 июля 2025 года
              </p>
              <div>
                <p className="text-gray-500 text-sm mb-2 uppercase tracking-widest">
                  Контакты
                </p>
                <p className="text-dark-green font-light text-lg">+7 (999) 123-45-67</p>
              </div>
            </div>
          </div>

          <div className="text-center py-16 px-8">
            <p className="font-light text-xl text-sage italic">
              С любовью ждём встречи с вами
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Index;