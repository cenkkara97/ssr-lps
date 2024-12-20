import { useNavigate } from "react-router-dom";

export function Button() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/randevu")}
      className="bg-primaryOrange hover:bg-primaryOrange/90 text-white font-bold rounded-3xl"
    >
      Hemen Randevu Alın
    </button>
  );
}
