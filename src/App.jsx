import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Menu, X, Leaf, Heart, Users, ShoppingBag, Mail, Phone, MapPin } from 'lucide-react';
import './App.css';
import logo from './assets/ecoestilo_logo.png';

// Shared products data
const products = [
  {
    id: 1,
    name: "Camiseta Orgánica Personalizada",
    price: "Gs 45000",
    description: "Camiseta de algodón orgánico 100% personalizable",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Sudadera Eco-Friendly",
    price: "Gs 75000",
    description: "Sudadera de materiales reciclados con diseño a medida",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&q=80&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Pantalón Sostenible",
    price: "Gs 85000",
    description: "Pantalón de lino orgánico con ajuste personalizado",
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&q=80&auto=format&fit=crop"
  },
  {
    id: 4,
    name: "Vestido Artesanal",
    price: "Gs 95000",
    description: "Vestido de tencel con bordados personalizados",
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&q=80&auto=format&fit=crop"
  }
];

// Header Component
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-eco-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <img src={logo} alt="EcoEstilo Personal" className="h-12 w-12" />
            <span className="text-xl font-bold text-eco-forest">EcoEstilo Personal</span>
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-eco-forest hover:text-eco-earth transition-colors">Inicio</Link>
            <Link to="/productos" className="text-eco-forest hover:text-eco-earth transition-colors">Productos</Link>
            <Link to="/personalizar" className="text-eco-forest hover:text-eco-earth transition-colors">Personalizar</Link>
            <Link to="/contacto" className="text-eco-forest hover:text-eco-earth transition-colors">Contacto</Link>
          </nav>

          <button
            className="md:hidden text-eco-forest"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-2">
              <Link to="/" className="text-eco-forest hover:text-eco-earth transition-colors py-2">Inicio</Link>
              <Link to="/productos" className="text-eco-forest hover:text-eco-earth transition-colors py-2">Productos</Link>
              <Link to="/personalizar" className="text-eco-forest hover:text-eco-earth transition-colors py-2">Personalizar</Link>
              <Link to="/contacto" className="text-eco-forest hover:text-eco-earth transition-colors py-2">Contacto</Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

// Home Page Component
const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-eco-beige to-eco-sage py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <h1 className="text-4xl md:text-6xl font-bold text-eco-forest mb-6">
                Moda Sostenible y Personalizada
              </h1>
              <p className="text-lg text-eco-forest mb-8">
                Descubre prendas únicas diseñadas especialmente para ti, creadas con materiales ecológicos y procesos éticos.
              </p>
              <div className="space-x-4">
                <Link to="/personalizar" className="btn-eco-primary inline-block">
                  Personalizar Ahora
                </Link>
                <Link to="/productos" className="btn-eco-secondary inline-block">
                  Ver Productos
                </Link>
              </div>
            </div>
            <div className="slide-in-right">
              <div className="bg-eco-white rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-eco-forest mb-4">¿Por qué EcoEstilo?</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Leaf className="text-eco-sage" size={24} />
                    <span className="text-eco-forest">100% Materiales Sostenibles</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Heart className="text-eco-earth" size={24} />
                    <span className="text-eco-forest">Diseño Personalizado</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="text-eco-sage" size={24} />
                    <span className="text-eco-forest">Producción Ética</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-eco-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-eco-forest mb-12">
            Nuestro Proceso
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center fade-in">
              <div className="bg-eco-sage rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-bold text-eco-forest mb-2">Diseña</h3>
              <p className="text-eco-forest">Personaliza tu prenda eligiendo materiales, colores y detalles únicos.</p>
            </div>
            <div className="text-center fade-in">
              <div className="bg-eco-earth rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-bold text-eco-forest mb-2">Confecciona</h3>
              <p className="text-eco-forest">Nuestros artesanos crean tu prenda con técnicas tradicionales y sostenibles.</p>
            </div>
            <div className="text-center fade-in">
              <div className="bg-eco-sage rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-bold text-eco-forest mb-2">Disfruta</h3>
              <p className="text-eco-forest">Recibe tu prenda única y sostenible directamente en tu hogar.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products preview on Home */}
      <section className="py-20 bg-eco-beige">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-eco-forest mb-8">Nuestros Productos</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-eco-white rounded-lg shadow-lg overflow-hidden fade-in">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-eco-forest mb-2">{product.name}</h3>
                  <p className="text-eco-forest mb-4">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-eco-earth">{product.price}</span>
                    <Link to="/personalizar" className="btn-eco-primary text-sm">
                      Personalizar
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/productos" className="btn-eco-secondary inline-block">
              Ver todos los productos
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-eco-sage to-eco-beige">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-eco-forest mb-4">Crea tu prenda sostenible hoy</h2>
          <p className="text-eco-forest mb-6">Elige materiales responsables, personaliza cada detalle y apoya una producción ética.</p>
          <div className="space-x-4">
            <Link to="/personalizar" className="btn-eco-primary inline-block">
              Personalizar Ahora
            </Link>
            <Link to="/productos" className="btn-eco-secondary inline-block">
              Explorar Productos
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

// Products Page Component
const ProductsPage = () => {
  const products = [
    {
      id: 1,
      name: "Camiseta Orgánica Personalizada",
      price: "Gs 45000",
      description: "Camiseta de algodón orgánico 100% personalizable",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400"
    },
    {
      id: 2,
      name: "Sudadera Eco-Friendly",
      price: "Gs 75000",
      description: "Sudadera de materiales reciclados con diseño a medida",
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400"
    },
    {
      id: 3,
      name: "Pantalón Sostenible",
      price: "Gs 85000",
      description: "Pantalón de lino orgánico con ajuste personalizado",
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400"
    },
    {
      id: 4,
      name: "Vestido Artesanal",
      price: "Gs 95000",
      description: "Vestido de tencel con bordados personalizados",
      image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400"
    }
  ];

  return (
    <div className="min-h-screen py-20 bg-eco-beige">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-eco-forest mb-12">
          Nuestros Productos
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-eco-white rounded-lg shadow-lg overflow-hidden fade-in">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-eco-forest mb-2">{product.name}</h3>
                <p className="text-eco-forest mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-eco-earth">{product.price}</span>
                  <Link to="/personalizar" className="btn-eco-primary text-sm">
                    Personalizar
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Customize Page Component
const CustomizePage = () => {
  const [selectedProduct, setSelectedProduct] = useState('camiseta');
  const [selectedColor, setSelectedColor] = useState('verde');
  const [selectedSize, setSelectedSize] = useState('M');

  return (
    <div className="min-h-screen py-20 bg-eco-white">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-eco-forest mb-12">
          Personaliza tu Prenda
        </h1>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="slide-in-left">
            <h2 className="text-2xl font-bold text-eco-forest mb-6">Configuración</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-eco-forest font-semibold mb-2">Tipo de Prenda</label>
                <select 
                  value={selectedProduct}
                  onChange={(e) => setSelectedProduct(e.target.value)}
                  className="w-full p-3 border border-eco-sage rounded-lg focus:outline-none focus:ring-2 focus:ring-eco-earth"
                >
                  <option value="camiseta">Camiseta</option>
                  <option value="sudadera">Sudadera</option>
                  <option value="pantalon">Pantalón</option>
                  <option value="vestido">Vestido</option>
                </select>
              </div>

              <div>
                <label className="block text-eco-forest font-semibold mb-2">Color</label>
                <div className="grid grid-cols-4 gap-2">
                  {['verde', 'azul', 'tierra', 'beige'].map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`w-12 h-12 rounded-full border-2 ${
                        selectedColor === color ? 'border-eco-forest' : 'border-gray-300'
                      } ${
                        color === 'verde' ? 'bg-eco-sage' :
                        color === 'azul' ? 'bg-blue-400' :
                        color === 'tierra' ? 'bg-eco-earth' :
                        'bg-eco-beige'
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-eco-forest font-semibold mb-2">Talla</label>
                <div className="grid grid-cols-5 gap-2">
                  {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`p-2 border rounded-lg ${
                        selectedSize === size 
                          ? 'bg-eco-earth text-white border-eco-earth' 
                          : 'border-eco-sage text-eco-forest hover:bg-eco-sage hover:text-white'
                      } transition-all`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-eco-forest font-semibold mb-2">Detalles Especiales</label>
                <textarea 
                  placeholder="Describe cualquier detalle especial que desees (bordados, estampados, etc.)"
                  className="w-full p-3 border border-eco-sage rounded-lg focus:outline-none focus:ring-2 focus:ring-eco-earth h-24"
                />
              </div>

              <button className="btn-eco-primary w-full">
                Añadir al Carrito - Gs 65000
              </button>
            </div>
          </div>

          <div className="slide-in-right">
            <h2 className="text-2xl font-bold text-eco-forest mb-6">Vista Previa</h2>
            <div className="bg-eco-beige rounded-lg p-8 text-center">
              <div className="bg-eco-white rounded-lg p-8 mb-4">
                <ShoppingBag size={64} className="mx-auto text-eco-sage mb-4" />
                <h3 className="text-xl font-bold text-eco-forest mb-2">
                  {selectedProduct.charAt(0).toUpperCase() + selectedProduct.slice(1)}
                </h3>
                <p className="text-eco-forest">Color: {selectedColor}</p>
                <p className="text-eco-forest">Talla: {selectedSize}</p>
              </div>
              <p className="text-sm text-eco-forest">
                * Esta es una vista previa simplificada. El producto final será confeccionado según tus especificaciones.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Contact Page Component
const ContactPage = () => {
  return (
    <div className="min-h-screen py-20 bg-eco-beige">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-eco-forest mb-12">
          Contacto
        </h1>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="slide-in-left">
            <h2 className="text-2xl font-bold text-eco-forest mb-6">Información de Contacto</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="text-eco-earth" size={24} />
                <span className="text-eco-forest">info@ecoestilopersonal.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-eco-earth" size={24} />
                <span className="text-eco-forest"> (+595) 981- 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="text-eco-earth" size={24} />
                <span className="text-eco-forest">123 Calle Sostenible, Ciudad Asuncion</span>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-bold text-eco-forest mb-4">Horarios de Atención</h3>
              <p className="text-eco-forest">Lunes a Viernes: 9:00 AM - 6:00 PM</p>
              <p className="text-eco-forest">Sábados: 10:00 AM - 4:00 PM</p>
              <p className="text-eco-forest">Domingos: Cerrado</p>
            </div>
          </div>

          <div className="slide-in-right">
            <h2 className="text-2xl font-bold text-eco-forest mb-6">Envíanos un Mensaje</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-eco-forest font-semibold mb-2">Nombre</label>
                <input 
                  type="text" 
                  className="w-full p-3 border border-eco-sage rounded-lg focus:outline-none focus:ring-2 focus:ring-eco-earth"
                  placeholder="Tu nombre completo"
                />
              </div>
              <div>
                <label className="block text-eco-forest font-semibold mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full p-3 border border-eco-sage rounded-lg focus:outline-none focus:ring-2 focus:ring-eco-earth"
                  placeholder="tu@email.com"
                />
              </div>
              <div>
                <label className="block text-eco-forest font-semibold mb-2">Mensaje</label>
                <textarea 
                  className="w-full p-3 border border-eco-sage rounded-lg focus:outline-none focus:ring-2 focus:ring-eco-earth h-32"
                  placeholder="Escribe tu mensaje aquí..."
                />
              </div>
              <button type="submit" className="btn-eco-primary w-full">
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-eco-forest text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img src={logo} alt="EcoEstilo Personal" className="h-8 w-8" />
              <span className="text-lg font-bold">EcoEstilo Personal</span>
            </div>
            <p className="text-gray-300">
              Moda sostenible y personalizada para un futuro mejor.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Enlaces</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Inicio</Link></li>
              <li><Link to="/productos" className="text-gray-300 hover:text-white transition-colors">Productos</Link></li>
              <li><Link to="/personalizar" className="text-gray-300 hover:text-white transition-colors">Personalizar</Link></li>
              <li><Link to="/contacto" className="text-gray-300 hover:text-white transition-colors">Contacto</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Sostenibilidad</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Materiales Orgánicos</li>
              <li>Producción Ética</li>
              <li>Comercio Justo</li>
              <li>Cero Desperdicio</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Síguenos</h3>
            <p className="text-gray-300">
              Mantente al día con nuestras últimas creaciones y noticias sobre sostenibilidad.
            </p>
          </div>
        </div>
        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2025 EcoEstilo Personal. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/productos" element={<ProductsPage />} />
            <Route path="/personalizar" element={<CustomizePage />} />
            <Route path="/contacto" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
