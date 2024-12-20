import NavHeader from "./header";
import Footer from "./footer";
import { Link } from "react-router-dom";

export default function ThankYouPage() {
  return (
    <>
      <NavHeader />
      <div className="min-h-screen bg-sectionSecondary flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-lg max-w-md w-full overflow-hidden">
          <div className="bg-[#619FE8] p-6 text-center">
            <h1 className="text-2xl font-semibold text-white">
              Bizimle İletişime Geçtiğiniz için Teşekkür Ederiz!
            </h1>
          </div>

          <div className="p-8 text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full border-2 border-primaryBlue flex items-center justify-center">
                <span className="text-3xl text-primaryBlue">✔</span>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-primaryBlue mb-4">
              Talebiniz Bize Ulaştı!
            </h2>
            <p className="text-gray-600 mb-8">
              Bilgileriniz uzman ekibimiz tarafından incelendikten sonra yetkili
              bir personelimiz sizinle telefonda iletişime geçecektir.
            </p>

            <div className="flex items-center gap-3 justify-center border-t pt-6">
              <img
                src="/assets/images/instagram-icon.png"
                alt="Instagram"
                className="w-8 h-8"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg";
                }}
              />
              <p className="text-sm text-gray-600">
                Instagram'da bizi takip edin ve hastalarımızın inanılmaz
                dönüşümlerine şahit olun!
              </p>
            </div>

            <div className="mt-6">
              <Link
                to="/"
                className="inline-block bg-primaryOrange text-white py-2 px-4 rounded-md hover:bg-opacity-90 transition-colors"
              >
                Anasayfaya Dön
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
