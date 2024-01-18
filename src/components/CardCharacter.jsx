export default function CardCharacter({ nom, image, pv, pm, side }) {
  return (
    <div
      className={`border-4 rounded-xl border-amber-100 w-[300px] h-[500px] shadow-xl flex flex-col
                     ${side === "dark" && "border-red-700"}`}
    >
      <img src={image} className="object-cover h-3/5" />
      <div className="flex flex-col p-4 gap-y-4 h-2/5 bg-slate-900">
        <h4 className="text-xl font-semibold">
          Nom : <span className="no-underline">{nom}</span>
        </h4>
        <h4 className="text-xl font-semibold">
          Santé : <span className="no-underline">{pv}</span> PV
        </h4>
        <h4 className="text-xl font-semibold">
          Magie : <span className="no-underline">{pm}</span> PM
        </h4>
        <h4 className="text-xl font-semibold">
          Côté :{" "}
          <span className="no-underline">
            {side === "light" ? "Lumière" : "Ténèbre"}
          </span>
        </h4>
      </div>
    </div>
  );
}
