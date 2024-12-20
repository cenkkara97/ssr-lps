import ThankYouPage from "./components/thankyou-page";
import { useState } from "react";
import { User, Mail, MapPin, Phone } from "lucide-react";

export default function Form() {
  const [formData, setFormData] = useState({
    gender: "male",
    name: "",
    email: "",
    location: "",
    phone: "",
    wantsTransfer: "yes",
    acceptTerms: false,
    acceptMarketing: false,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.phone) {
      console.log("Form submitted:", formData);
      setIsSubmitted(true);
    }
  };

  if (isSubmitted) {
    return <ThankYouPage />;
  }

  return (
    <div className="min-h-screen bg-[#FDF8F6]">
      <div className="container mx-auto px-4 py-8 max-w-lg">
        <div className="bg-white rounded-lg shadow-lg">
          <div className="bg-formBlue rounded-tl-3xl rounded-tr-3xl p-5">
            <h2 className="text-2xl font-semibold text-center text-white">
              Ücretsiz Randevu Alın
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="px-6 mt-6 space-y-6 pb-10">
            <div className="space-y-1.5">
              <label className="block text-sm font-medium text-gray-700">
                Cinsiyetiniz:
              </label>
              <div className="flex gap-6">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={formData.gender === "male"}
                    onChange={(e) =>
                      setFormData({ ...formData, gender: e.target.value })
                    }
                    className="mr-2"
                  />
                  Erkek
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={formData.gender === "female"}
                    onChange={(e) =>
                      setFormData({ ...formData, gender: e.target.value })
                    }
                    className="mr-2"
                  />
                  Kadın
                </label>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="block text-sm font-medium text-gray-700">
                Klinik İçerisinde Lüks Otel ve VIP Transfer ister misiniz?
              </label>
              <div className="flex gap-6">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="transfer"
                    value="yes"
                    checked={formData.wantsTransfer === "yes"}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        wantsTransfer: e.target.value,
                      })
                    }
                    className="mr-2"
                  />
                  Evet
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="transfer"
                    value="no"
                    checked={formData.wantsTransfer === "no"}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        wantsTransfer: e.target.value,
                      })
                    }
                    className="mr-2"
                  />
                  Hayır
                </label>
              </div>
            </div>

            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Adınız Soyadınız:
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-primaryBlue focus:border-primaryBlue"
                  placeholder="Adınız Soyadınız:"
                />
              </div>
            </div>

            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                E-posta Adresiniz:
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-primaryBlue focus:border-primaryBlue"
                  placeholder="E-posta Adresiniz:"
                />
              </div>
            </div>

            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                İstanbul'da Hangi İlçede Yaşıyorsunuz:
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) =>
                    setFormData({ ...formData, location: e.target.value })
                  }
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-primaryBlue focus:border-primaryBlue"
                  placeholder="Yaşadığınız İlçe:"
                />
              </div>
            </div>

            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Telefon Numaranız:
              </label>
              <div className="flex">
                <select className="w-24 border border-gray-300 rounded-l-md focus:ring-primaryBlue focus:border-primaryBlue">
                  <option>TR (+90)</option>
                </select>
                <div className="relative flex-1">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-r-md focus:ring-primaryBlue focus:border-primaryBlue"
                    placeholder="5xx xxx xx xx"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <label className="flex items-start">
                <input
                  type="checkbox"
                  checked={formData.acceptMarketing}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      acceptMarketing: e.target.checked,
                    })
                  }
                  className="mt-1 mr-2"
                />
                <span className="text-sm text-gray-600">
                  Ticari elektronik ileti gönderilmesini kabul ediyorum.
                </span>
              </label>
              <label className="flex items-start">
                <input
                  type="checkbox"
                  checked={formData.acceptTerms}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      acceptTerms: e.target.checked,
                    })
                  }
                  className="mt-1 mr-2"
                />
                <span className="text-sm text-gray-600">
                  Bu formu kullanarak KVKK metni ve Gizlilik Politikası'nı kabul
                  etmiş olursunuz.
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-primaryOrange text-white py-3 px-4 rounded-md hover:bg-opacity-90 transition-colors"
            >
              Devam Et
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
