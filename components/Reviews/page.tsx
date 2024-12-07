'use client';
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Reviews = () => {
    const reviews = [
        {
            name: "Stanciu Daniel",
            location: "Pitești",
            review: "Am folosit așchiile din fag simplu pentru a afuma păstrăv, iar aroma naturală a fagului a scos în evidență gustul delicat al peștelui. E o soluție perfectă pentru oricine vrea să obțină preparate afumate de calitate acasă.”",
            rating: 5,
            image: "https://via.placeholder.com/50",
        },
        {
            name: "Rada Gheorghe",
            location: "Târgu Jiu",
            review: "Am încercat așchiile din fag pentru cotletele de porc și e altceva . De atunci le folosesc la gratar intotdeauna.",
            rating: 4,
            image: "https://via.placeholder.com/50",
        },
        {
            name: "Tunischi Cătălin",
            location: "București",
            review: "Așchiile cu piper și usturoi au fost o alegere excelentă pentru afumarea carnatilor in afumatoarea de la Drevos . Mirosul din timpul afumării e de neegalat, iar gustul final a fost perfect condimentat. Recomand cu încredere!",
            rating: 5,
            image: "https://via.placeholder.com/50",
        },
        {
            name: "Pavel Laurențiu",
            location: "Craiova",
            review: "Am folosit așchiile din fag simplu pentru afumarea coastei de vită și am obținut exact ce căutam: o aromă ușoară și naturală, fără să acopere gustul cărnii. Sunt foarte mulțumit și le voi recomanda și altora.",
            rating: 5,
            image: "https://via.placeholder.com/50",
        },
        {
            name: "Berca Leonard",
            location: "Brașov",
            review: "Pentru mine, așchiile cu piper și usturoi sunt cele mai bune! Am afumat carne de miel, iar aroma condimentată și afumată a fost exact ce aveam nevoie pentru o masă memorabilă. Le recomand cu toată încrederea!",
            rating: 5,
            image: "https://via.placeholder.com/50",
        },
    ];

    return (
        <div id='Reviews' className="py-10 pt-36">
            <div className="max-w-4xl mx-auto px-4">
                {/* Titlu Secțiune */}
                <h2 className="text-heading-lg md:text-title-sm font-bold text-neutral-charcoal text-center mb-6">
                    Ce spun clienții noștri
                </h2>

                {/* Swiper Slider */}
                <Swiper
                    modules={[Navigation, Pagination, A11y]}
                    spaceBetween={20}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                >
                    {reviews.map((review, index) => (
                        <SwiperSlide key={index}>
                            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
                                {/* Avatar */}
                                {/*<img*/}
                                {/*    src={review.image}*/}
                                {/*    alt={review.name}*/}
                                {/*    className="w-16 h-16 rounded-full mb-4"*/}
                                {/*/>*/}

                                {/* Nume și Locatie */}
                                <h3 className="text-lg font-semibold text-neutral-charcoal">{review.name}</h3>
                                <p className="text-sm text-neutral-gray">{review.location}</p>

                                {/* Rating (Stele) */}
                                <div className="flex items-center justify-center mt-2">
                                    {Array.from({ length: review.rating }).map((_, i) => (
                                        <svg
                                            key={i}
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 text-yellow-400"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M12 .587l3.668 7.431L24 9.747l-6 5.832 1.414 8.243L12 18.896 4.586 23.822 6 15.579 0 9.747l8.332-1.729z" />
                                        </svg>
                                    ))}
                                </div>

                                {/* Recenzie */}
                                <p className="text-sm text-gray-600 mt-4">{review.review}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Reviews;
