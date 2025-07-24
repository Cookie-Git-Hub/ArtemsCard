import { useState, useEffect } from "react";
import {
  BarChart3,
  Database,
  TrendingUp,
  Users,
  CheckCircle,
  Send,
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  Award,
  Target,
  Zap,
  Globe,
  FileCode,
  DollarSign,
  ShieldCheck,
  ThumbsUp
} from "lucide-react";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState<{
    services?: boolean;
    audience?: boolean;
    trust?: boolean;
    projects?: boolean;
  }>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const handleTelegramClick = () => {
    if (window.gtag) {
      window.gtag("event", "click_telegram", {
        event_category: "engagement",
        event_label: "telegram_button",
      });
    }

    window.open('https://t.me/ppestikk', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-cyan-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-sky-400 to-cyan-400 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-sky-600 to-cyan-600 bg-clip-text text-transparent">
                DataAnalyst
              </span>
            </div>

            <nav className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection("services")}
                className="text-gray-700 hover:text-sky-600 transition-colors"
              >
                Услуги
              </button>
              <button
                onClick={() => scrollToSection("audience")}
                className="text-gray-700 hover:text-sky-600 transition-colors"
              >
                Целевая аудитория
              </button>
              <button
                onClick={() => scrollToSection("trust")}
                className="text-gray-700 hover:text-sky-600 transition-colors"
              >
                Преимущества
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-gray-700 hover:text-sky-600 transition-colors"
              >
                Проекты
              </button>
            </nav>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-2 space-y-2">
              <button
                onClick={() => scrollToSection("services")}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg"
              >
                Услуги
              </button>
              <button
                onClick={() => scrollToSection("audience")}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg"
              >
                Целевая аудитория
              </button>
              <button
                onClick={() => scrollToSection("trust")}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg"
              >
                Преимущества
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg"
              >
                Проекты
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="mb-8">
              <div className="w-32 h-32 bg-gradient-to-r from-sky-400 to-cyan-400 rounded-full mx-auto flex items-center justify-center shadow-xl">
                <Database className="w-16 h-16 text-white" />
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-sky-600 to-cyan-600 bg-clip-text text-transparent">
                Аналитик данных
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Превращаю данные в инсайты, которые помогают принимать правильные
              бизнес-решения
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection("services")}
                className="bg-gradient-to-r from-sky-500 to-cyan-500 text-white px-8 py-3 rounded-lg font-medium hover:from-sky-600 hover:to-cyan-600 transition-all transform hover:scale-105 shadow-lg"
              >
                Узнать больше
              </button>
              <button
                onClick={handleTelegramClick}
                className="bg-white text-sky-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-all transform hover:scale-105 shadow-lg border border-sky-200"
              >
                Написать в Telegram
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className={`py-20 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
          isVisible.services
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-sky-600 to-cyan-600 bg-clip-text text-transparent">
                Мои услуги
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Комплексный анализ данных для эффективного развития вашего бизнеса
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-sky-400 to-cyan-400 rounded-xl flex items-center justify-center mb-6">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Анализ данных
              </h3>
              <p className="text-gray-600 mb-4">
              Помогаю увидеть скрытые закономерности, понять, что влияет на прибыль, 
              и на чём стоит сосредоточиться
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Статистический анализ
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Прогнозирование
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Сегментация
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-sky-400 to-cyan-400 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Визуализация
              </h3>
              <p className="text-gray-600 mb-4">
              Экономлю ваше время — наглядные отчёты показывают главное без копания в Excel
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Дашборды
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Инфографика
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Отчеты
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-sky-400 to-cyan-400 rounded-xl flex items-center justify-center mb-6">
                <Database className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Автоматизация
              </h3>
              <p className="text-gray-600 mb-4">
              Настраиваю сбор и обработку данных «на автопилоте» — без рутинной ручной работы
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  ETL процессы
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Мониторинг
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Алерты
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section
        id="audience"
        className={`py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-sky-100 to-cyan-100 transition-all duration-1000 ${
          isVisible.audience
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-sky-600 to-cyan-600 bg-clip-text text-transparent">
                Кому подойдут мои услуги
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Помогаю компаниям любого размера принимать решения на основе
              данных
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-all transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-sky-400 to-cyan-400 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                Товарный бизнес
              </h3>
              <p className="text-gray-600 text-sm">
              Помогаю понять, какие товары приносят максимум прибыли и какие — замораживают деньги на складе
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-all transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-sky-400 to-cyan-400 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">
              Онлайн-магазины
              </h3>
              <p className="text-gray-600 text-sm">
              Анализирую поведение покупателей, нахожу точки потерь и увеличиваю конверсии без лишних затрат
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-all transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-sky-400 to-cyan-400 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                Реклама и продвижение
              </h3>
              <p className="text-gray-600 text-sm">
              Показываю, какие каналы реально работают, и помогаю сократить маркетинговые расходы без потери трафика
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-all transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-sky-400 to-cyan-400 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">
              Услуги и офлайн-бизнес
              </h3>
              <p className="text-gray-600 text-sm">
              Автоматизирую учёт, помогаю считать прибыль и понимать, какие услуги приносят максимум выручки
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section
        id="trust"
        className={`py-20 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
          isVisible.trust
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-sky-600 to-cyan-600 bg-clip-text text-transparent">
              Реальная польза вместо обещаний
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Проверенный подход, понятные решения, реальная польза
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-center mb-4">
                <Zap className="w-8 h-8 text-sky-500 mr-3" />
                <h3 className="text-xl font-semibold text-gray-800">
                  Быстрые результаты
                </h3>
              </div>
              <p className="text-gray-600">
                Уже через 1-2 недели вы получите первые инсайты и рекомендации
                по оптимизации бизнеса
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-center mb-4">
                <ShieldCheck className="w-8 h-8 text-sky-500 mr-3" />
                <h3 className="text-xl font-semibold text-gray-800">
                Конфиденциальность
                </h3>
              </div>
              <p className="text-gray-600">
              Соблюдаю все принципы конфиденциальной обработки данных: ограниченный доступ, локальное хранение, контроль доступа к исходным файлам
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-center mb-4">
                <ThumbsUp className="w-8 h-8 text-sky-500 mr-3" />
                <h3 className="text-xl font-semibold text-gray-800">
                  Гарантия качества
                </h3>
              </div>
              <p className="text-gray-600">
              Вы получаете не просто отчёт, а понятный инструмент. Обсуждаем результат, вносим правки, адаптируем под ваши задачи — до нужного вам качества
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className={`py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-sky-50 to-cyan-50 transition-all duration-1000 ${
          isVisible.projects
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >

      </section>

 {/* Projects Section */}
      <section
        id="projects"
        className={`py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-sky-50 to-cyan-50 transition-all duration-1000 ${
          isVisible.projects
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-sky-600 to-cyan-600 bg-clip-text text-transparent">
                Инструменты визуализации данных, с которыми я работаю
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              BI-системы и Python-графики для наглядных, понятных и полезных отчётов
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="h-48 bg-gradient-to-r from-sky-200 to-cyan-200 rounded-xl mb-6 flex items-center justify-center">
                <BarChart3 className="w-16 h-16 text-sky-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
              Интерактивные дашборды <br/> На BI-платформах
              </h3>
              <p className="text-gray-600 mb-4">
                Создаю дашборды в Power BI и Google Data Studio: понятная визуализация продаж, расходов, выручки, клиентской базы.
              </p>
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-700 mb-2">Преимущества:</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Простота восприятия: всё видно на одном экране
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Удобно для руководителей и сотрудников без технических знаний
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Возможность делиться ссылкой и настроить права доступа
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Работают в облаке, без установки ПО
                  </li>
                </ul>
              </div>
              <div className="flex items-center">
                <a 
                  href="https://lookerstudio.google.com/reporting/fd9faf7c-3f73-48b4-99a5-7f9263e7741d" 
                  className="text-sky-600 hover:text-sky-700 font-medium text-sm flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  🔗 Посмотреть пример — Анализ продаж в магазине
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="h-48 bg-gradient-to-r from-sky-200 to-cyan-200 rounded-xl mb-6 flex items-center justify-center">
                <FileCode className="w-16 h-16 text-sky-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Визуализация данных в Python <br/>(Jupyter Notebook)
              </h3>
              <p className="text-gray-600 mb-4">
                Пишу скрипты и визуализирую данные с помощью Pandas, Matplotlib, Seaborn и Plotly. Подходит для глубокой аналитики и кастомных отчётов.
              </p>
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-700 mb-2">Преимущества:</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Максимальная гибкость и контроль над данными
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Можно строить любые графики и добавлять логику
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Идеально подходит для глубокого анализа и подготовки отчётов с пояснениями
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Возможность автоматизации и повторного запуска
                  </li>
                </ul>
              </div>
              <div className="flex items-center">
                <a 
                  href="https://www.kaggle.com/code/artemkabseu/musicmarket" 
                  className="text-sky-600 hover:text-sky-700 font-medium text-sm flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  🔗 Посмотреть пример — Jupyter (Kaggle)
                </a>
              </div>
              <div className="flex items-center">
                <a 
                  href="https://colab.research.google.com/drive/14-58QP82YN5XFvOZzESNo9U5cTN88ZfD?usp=sharing" 
                  className="text-sky-600 hover:text-sky-700 font-medium text-sm flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  🔗 Посмотреть пример — Jupyter (Google Colab)
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Free Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="mb-8">
              <div className="w-32 h-32 bg-gradient-to-r from-sky-400 to-cyan-400 rounded-full mx-auto flex items-center justify-center shadow-xl">
                <DollarSign className="w-16 h-16 text-white" />
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-sky-600 to-cyan-600 bg-clip-text text-transparent">
              Без риска для вас, <br/>
              с пользой для всех
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Я провожу полноценную аналитику бесплатно — чтобы вы получили пользу, а я пополнил портфолио реальными кейсами. 
            Всё по-взрослому: сроки, результат, забота о вашем бизнесе.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-sky-600 to-cyan-600">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Готовы превратить данные в прибыль?
          </h2>
          <p className="text-xl text-sky-100 mb-8 max-w-3xl mx-auto">
            Свяжитесь со мной прямо сейчас для обсуждения вашего проекта
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleTelegramClick}
              className="bg-white text-sky-600 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center"
            >
              <Send className="w-5 h-5 mr-2" />
              Написать в Telegram
            </button>
            <a
              href="mailto:shamanka.commercial@gmail.com"
              className="bg-sky-700 text-white px-8 py-4 rounded-lg font-medium hover:bg-sky-800 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              Отправить Email
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-sky-400 to-cyan-400 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg font-bold">DataAnalyst</span>
              </div>
              <p className="text-gray-400">
                Превращаю данные в инсайты, которые помогают принимать
                правильные бизнес-решения
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Контакты</h3>
              <div className="space-y-2">
                <div className="flex items-center text-gray-400">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>+375 33 380 8683</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <Mail className="w-4 h-4 mr-2" />
                  <span>shamanka.commercial@gmail.com</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>Беларусь, Минск</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Услуги</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Анализ данных</li>
                <li>Визуализация</li>
                <li>Автоматизация</li>
                <li>Консультации</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
