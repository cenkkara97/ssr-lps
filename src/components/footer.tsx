export default function Footer() {
  return (
    <footer className="bg-primaryBlue text-white">
      <div className="mx-auto max-w-[1120px] flex flex-col md:flex-row items-start md:items-center justify-between p-6 md:p-8 gap-6 md:gap-8">
        <div className="flex flex-col items-start gap-6">
          <h2 className="text-primaryOrange text-2xl md:text-3xl font-bold">
            İletişim Bilgileri
          </h2>
          <div>
            <b className="text-lg">Adres</b>
            <p className="text-txtLight font-light mt-2 leading-6">
              <a
                href="https://maps.app.goo.gl/mnT5Str8HRgX7RNp7"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Hamidiye, Cendere Cad. <br />
                No: 103 – 1 T4 Blok, 34396 <br />
                Kâğıthane/İstanbul
              </a>
            </p>
          </div>
          <div>
            <b className="text-lg">E-posta</b>
            <p className="text-txtLight font-light mt-2 leading-6">
              <a
                href="mailto:info@elitklinik.com.tr"
                className="hover:underline"
              >
                info@elitklinik.com.tr
              </a>
            </p>
          </div>
          <div>
            <b className="text-lg">Telefon</b>
            <p className="text-txtLight font-light mt-2 leading-6">
              <a href="tel:+905520000034" className="hover:underline">
                +90 552 000 00 34
              </a>
            </p>
          </div>
          <img
            src="/assets/images/navbar-logo.png"
            alt="Elit Klinik Logo"
            width={150}
            height={63}
            className="h-auto w-full max-w-[200px]"
          />
        </div>
        <div className="w-full md:w-auto mt-6 md:mt-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5105.115156769951!2d28.985633355947904!3d41.10315295808738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7605d3b0973%3A0xf5d2f0479d4dda41!2sElithair%20Transplant!5e0!3m2!1str!2str!4v1720685370812!5m2!1str!2str"
            className="w-auto md:w-[500px] h-[400px] border-0 rounded-xl"
            allowFullScreen
            loading="lazy"
            rel="noopener"
          ></iframe>
        </div>
      </div>
    </footer>
  );
}
