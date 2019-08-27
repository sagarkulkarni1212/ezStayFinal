Hotel API -  http://13.67.75.64/swagger/v1/swagger.json

Identity API -http://13.76.254.73/swagger/v1/swagger.json

SQL API 52.187.17.151

Booking API 168.63.245.185

Storage Connection string 
	DefaultEndpointsProtocol=https;AccountName=ezstaystoragegroup;AccountKey=K+0v7aNw5cpTdjSJ1qSk/IOH4SYojYdsbfbQ+XHcf4+JhO8t1N3S/pFePCpspQI24wLNJYiUoA0Hjjpgy7dIBw==;EndpointSuffix=core.windows.net


 "https://ezstaystoragegroup.blob.core.windows.net/ezstayhotels/baglioni-hotel-london.jpg",


hotelSearchParams: {"city":"MUMBAI","checkIn":"2019-08-01","checkOut":"2019-08-08","rooms":2,"guests":2}


http://13.76.222.107/api/hotel?hotelSearchParams={"city":"PUNE","checkIn":"2019-08-01","checkOut":"2019-08-29","rooms":2,"guests":2}


https://stackoverflow.com/questions/29992848/parse-and-modify-a-query-string-in-net-core


	public string FirstName { get; set; }
        public string LastName { get; set; }
       
        public string Email { get; set; }
        public string HotelName { get; set; }
        public string City { get; set; }     
        
        public DateTime CheckIn { get; set; }
        
        public DateTime CheckOut { get; set; }
        public int NoOfRooms { get; set; }
        public int NoOfGuests { get; set; }
        public double Amount { get; set; }


https://localhost:44393/api/hotel/Pune




{
  
  "name": "Orchid Hotel 1",
  "rating": 4,
  "address": "Hinjeawdi phase 3 Pune",
  "city": "Pune",
  "phone": "1234567899",
  "hotelPhotoUrl": "C:/Users/huser/AppData/Local/Temp/baglioni-hotel-london.jpg",
  "rooms": [
    {
           
      "name": "Deluxe",
      "occupancy": 3,
      "roomType": "King",
      "amenities": [
        {
          
          "isWIFI": true,
          "isAC": true,
          "isSwimingPool": true
        }
      ]
    }
  ]
}