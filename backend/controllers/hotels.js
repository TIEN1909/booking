import Hotel from '../models/Hotel.js';
export const createHotel = async(req, res, next) =>{
    const newHotel = new Hotel(req.body)
    try {
        const savedHotel = await newHotel.save();
        res.status(200).json(savedHotel);
    }catch(error){
        next(error)
    }  
}

export const getHotel = async(req, res, next) =>{
    try {
        const hotel = await Hotel.findById(req.params.id);
        res.status(200).json(hotel);
    }catch(error){
        next(error)
    }  
}

export const getAllHotels = async(req, res, next) =>{
    const {min, max, ...others} = req.query
    try {
        const hotels = await Hotel.find({...others, price: {$gt: min || 1, $lt: max || 9999}}).limit(req.query.limit)
        res.status(200).json(hotels);
    }catch(error){
        next(error)
    }  
}
export const byCity = async(req, res, next) =>{
    const cities = req.query.cities.split(',')
    try {
        const list = await Promise.all(cities.map(city => {
            return Hotel.countDocuments({city:city});
        }));
        res.status(200).json(list);
    }catch(error){
        next(error)
    }  
}
export const byType = async(req, res, next) =>{
    try {
        const allDaLat = await Hotel.countDocuments({type: "Da Lat"})
        const allDaNang = await Hotel.countDocuments({type: "Da Nang"})
        const allHaNoi = await Hotel.countDocuments({type: "Ha Noi"})
        const allKonTum = await Hotel.countDocuments({type: "Kon Tum"})
        const allQuangNgai = await Hotel.countDocuments({type: "Quang Ngai"})

        res.status(200).json([
            {type: "Da Lat",count: allDaLat},
            {type: "Da Nang",count: allDaNang},
            {type: "Ha Noi",count: allHaNoi},
            {type: "Kon Tum",count: allKonTum},
            {type: "Quang Ngai",count: allQuangNgai}
        ]);

    }catch(error){
        next(error)
    }  
}


