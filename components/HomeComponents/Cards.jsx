

export default function Cards({title, value}){
    return(
        <div className="bg-gray-300 shadow rounded-xl p-4 flex flex-col items-center gap-2">
           <h2 className="text-xl font-semibold text-blue-600 dark:text-sky-400">{title}</h2>
           <p className="text-white text-xl">{value}</p>
        </div>
    )


}