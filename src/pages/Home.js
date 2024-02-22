import React, { useState } from "react";
import Nav from "../components/Nav";
import { Carousel, Typography, Button } from "@material-tailwind/react";
import Cards from "../components/Cards";
import Footer from "../components/Footer";

const Home = () => {
    const [input, setInput] = useState("");
    const handleSearch = (value) => {
        console.log("input: ", value);
        setInput(value);
    };

    return (
        <div className="">
            <Nav onSearch={handleSearch} />
            <div className="px-[150px] my-[50px]">
                <Carousel
                    className="rounded-xl"
                    navigation={({ setActiveIndex, activeIndex, length }) => (
                        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                            {new Array(length).fill("").map((_, i) => (
                                <span
                                    key={i}
                                    className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                                        activeIndex === i
                                            ? "w-8 bg-white"
                                            : "w-4 bg-white/50"
                                    }`}
                                    onClick={() => setActiveIndex(i)}
                                />
                            ))}
                        </div>
                    )}
                    autoplay={true}
                    transition={{ duration: 1 }}
                    loop={true}
                >
                    <div className="relative h-full w-full">
                        <img
                            src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
                            alt="image1"
                            className="h-[600px] w-full object-cover"
                        />
                        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
                            <div className="w-3/4 text-center md:w-2/4">
                                <Typography
                                    variant="h1"
                                    color="white"
                                    className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                                >
                                    The Beauty of Nature
                                </Typography>
                                <Typography
                                    variant="lead"
                                    color="white"
                                    className="mb-12 opacity-80"
                                >
                                    It is not so much for its beauty that the
                                    forest makes a claim upon men&apos;s hearts,
                                    as for that subtle something, that quality
                                    of air that emanation from old trees, that
                                    so wonderfully changes and renews a weary
                                    spirit.
                                </Typography>
                                <div className="flex justify-center gap-2">
                                    <Button size="lg" color="white">
                                        Explore
                                    </Button>
                                    <Button
                                        size="lg"
                                        color="white"
                                        variant="text"
                                    >
                                        Gallery
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative h-full w-full">
                        <img
                            src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                            alt="image2"
                            className="h-[600px] w-full object-cover"
                        />
                        <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
                            <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
                                <Typography
                                    variant="h1"
                                    color="white"
                                    className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                                >
                                    The Beauty of Nature
                                </Typography>
                                <Typography
                                    variant="lead"
                                    color="white"
                                    className="mb-12 opacity-80"
                                >
                                    It is not so much for its beauty that the
                                    forest makes a claim upon men&apos;s hearts,
                                    as for that subtle something, that quality
                                    of air that emanation from old trees, that
                                    so wonderfully changes and renews a weary
                                    spirit.
                                </Typography>
                                <div className="flex gap-2">
                                    <Button size="lg" color="white">
                                        Explore
                                    </Button>
                                    <Button
                                        size="lg"
                                        color="white"
                                        variant="text"
                                    >
                                        Gallery
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative h-full w-full">
                        <img
                            src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
                            alt="image3"
                            className="h-[600px] w-full object-cover"
                        />
                        <div className="absolute inset-0 grid h-full w-full items-end bg-black/75">
                            <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
                                <Typography
                                    variant="h1"
                                    color="white"
                                    className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                                >
                                    The Beauty of Nature
                                </Typography>
                                <Typography
                                    variant="lead"
                                    color="white"
                                    className="mb-12 opacity-80"
                                >
                                    It is not so much for its beauty that the
                                    forest makes a claim upon men&apos;s hearts,
                                    as for that subtle something, that quality
                                    of air that emanation from old trees, that
                                    so wonderfully changes and renews a weary
                                    spirit.
                                </Typography>
                                <div className="flex gap-2">
                                    <Button size="lg" color="white">
                                        Explore
                                    </Button>
                                    <Button
                                        size="lg"
                                        color="white"
                                        variant="text"
                                    >
                                        Gallery
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Carousel>
            </div>
            <div className="lg:px-[50px] pt-[50px]">
                <h1 className="text-[34px] font-semibold mb-[20px]">
                    Top-rated Luxe homes
                </h1>
                <Cards inputValue={input} />
            </div>
            <div className="mt-[100px] mb-[50px]">
                <Footer />
            </div>
        </div>
    );
};

export default Home;
