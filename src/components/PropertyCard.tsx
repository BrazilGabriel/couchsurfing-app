
function PropertyCard ({image, title, price, location, isAvaliable} : {image:string, title:string, price:number, location:{firstLine: string, city:string, code:string|number, country: string}, isAvaliable:boolean}) {

  return (
    <div className="p-4 rounded-md border border-slate-200 shadow-md flex cursor-pointer hover:bg-lime-50">
      <div className="min-w-64 flex flex-col">
      <p className="mx-1 font-bold text-slate-800 text-lg">{title}</p>
      <p className="mx-1">Localização: {location.country}</p>
      <p className="mx-1 text-slate-500">R$ {price} / noite</p>
      <p className={`mx-1 font-semibold ${isAvaliable ? "text-green-800": "text-slate-300"}`}>{isAvaliable ? "Disponível": "Indisponível"}</p>
      </div>
      <img className="w-36 rounded-md" src ={image} />

    </div>
  )
}

export default PropertyCard

