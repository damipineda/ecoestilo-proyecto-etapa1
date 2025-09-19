import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/ecoestilo_logo.png';
import { Card } from '../ui/card';

const BusinessDescription = () => {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-eco-beige to-eco-sage py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img src={logo} alt="EcoEstilo" className="h-20 w-20 mb-4" />
              <h1 className="text-4xl md:text-5xl font-extrabold text-eco-forest leading-tight mb-4">Sobre EcoEstilo</h1>
              <p className="text-lg text-eco-forest mb-6">
                Moda sostenible y personalizada. Creemos que el estilo y la responsabilidad ambiental pueden ir de la mano.
                Conectamos a clientes con prendas hechas con materiales responsables y procesos éticos.
              </p>
              <div className="space-x-3">
                <Link to="/personalizar" className="inline-block btn-eco-primary">Personalizar</Link>
                <Link to="/contacto" className="inline-block btn-eco-secondary">Contáctanos</Link>
              </div>
            </div>

            <div>
              <Card className="p-6">
                <h2 className="text-2xl font-semibold text-eco-forest mb-3">Nuestra Promesa</h2>
                <p className="text-eco-forest">Diseñar y ofrecer prendas que respeten el planeta, apoyando a productores locales y reduciendo residuos.</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 bg-eco-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Who we are */}
            <Card className="lg:col-span-2 p-6">
              <h2 className="text-2xl font-semibold text-eco-forest mb-4">¿Quiénes Somos?</h2>
              <p className="text-eco-forest mb-4">
                EcoEstilo es una tienda en línea comprometida con la moda sostenible y el cuidado del medio ambiente.
                Seleccionamos prendas y accesorios que combinan diseño, calidad y responsabilidad ambiental para que puedas
                expresarte con estilo sin sacrificar tus principios.
              </p>
              <p className="text-eco-forest">
                Trabajamos con materiales orgánicos y reciclados, proveedores locales y procesos que minimizan el impacto ambiental.
              </p>
            </Card>

            {/* Mission / Vision / Values */}
            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="text-xl font-semibold text-eco-forest mb-2">Misión</h3>
                <p className="text-eco-forest">Proporcionar alternativas de moda consciente, ofreciendo productos duraderos y promoviendo el consumo responsable.</p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold text-eco-forest mb-2">Visión</h3>
                <p className="text-eco-forest">Ser referentes en moda sostenible en Paraguay, inspirando cambios positivos en la industria.</p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold text-eco-forest mb-2">Valores</h3>
                <ul className="list-disc pl-5 text-eco-forest">
                  <li>Sostenibilidad</li>
                  <li>Transparencia</li>
                  <li>Innovación</li>
                  <li>Comunidad</li>
                </ul>
              </Card>
            </div>
          </div>

          {/* Objectives */}
          <div className="mt-8">
            <Card className="p-6">
              <h3 className="text-2xl font-semibold text-eco-forest mb-4">Nuestros Objetivos</h3>
              <div className="grid md:grid-cols-2 gap-4 text-eco-forest">
                <div className="bg-eco-beige p-4 rounded">
                  <p className="font-semibold">Reducir impacto ambiental</p>
                  <p className="text-sm">Promover prendas sostenibles y duraderas.</p>
                </div>
                <div className="bg-eco-beige p-4 rounded">
                  <p className="font-semibold">Educar</p>
                  <p className="text-sm">Crear conciencia sobre consumo responsable.</p>
                </div>
                <div className="bg-eco-beige p-4 rounded">
                  <p className="font-semibold">Colaborar con locales</p>
                  <p className="text-sm">Apoyar a diseñadores y proveedores éticos.</p>
                </div>
                <div className="bg-eco-beige p-4 rounded">
                  <p className="font-semibold">Minimizar huella</p>
                  <p className="text-sm">Adoptar prácticas que reduzcan residuos y emisiones.</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BusinessDescription;