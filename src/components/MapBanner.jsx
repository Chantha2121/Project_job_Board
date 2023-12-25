import "../styles/MapBanner.css";
export default function Map() {
  return (
    <>
      <div className="container mt-5">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.770660377688!2d104.88811507470986!3d11.568291888632727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109519fe4077d69%3A0x20138e822e434660!2z4Z6f4Z624Z6A4Z6b4Z6c4Z634Z6R4Z-S4Z6Z4Z624Z6b4Z-Q4Z6Z4Z6X4Z684Z6Y4Z634Z6T4Z-S4Z6R4Z6X4Z-S4Z6T4Z-G4Z6W4Z-B4Z6J!5e0!3m2!1skm!2skh!4v1683707949971!5m2!1skm!2skh"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
					className="map shadow"
        ></iframe>
      </div>
    </>
  );
}
