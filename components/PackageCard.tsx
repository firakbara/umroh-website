import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Hotel, Plane, ArrowRight, Star } from "lucide-react";

interface PackageProps {
    title: string;
    price: string;
    duration: string;
    date: string;
    hotel: string;
    maskapai: string;
    image: string;
    url?: string;
}

export default function PackageCard({ data }: { data: PackageProps }) {
    return (
        <Card className="group overflow-hidden border-2 border-transparent hover:border-blue-200 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-200/50 hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
            {/* Image with Overlay */}
            <div className="h-56 bg-gradient-to-br from-blue-100 to-sky-100 relative overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                    style={{ backgroundImage: `url(${data.image})` }}
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                {/* Popular Badge */}
                <div className="absolute top-4 right-4">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
                        <Star className="w-3 h-3 fill-current" />
                        Populer
                    </div>
                </div>

                {/* Duration Badge */}
                <div className="absolute bottom-4 left-4">
                    <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl text-blue-700 font-bold text-sm shadow-lg">
                        {data.duration} Hari
                    </div>
                </div>
            </div>

            <CardHeader className="pb-3">
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {data.title}
                </CardTitle>
            </CardHeader>

            <CardContent className="space-y-4 pb-4">
                {/* Price with Gradient */}
                <div className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
                    <div className="text-3xl font-black">{data.price}</div>
                </div>

                {/* Details with Icons */}
                <div className="space-y-2.5 text-sm">
                    <div className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors">
                        <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Calendar className="w-4 h-4 text-blue-600" />
                        </div>
                        <span className="font-medium">{data.date}</span>
                    </div>

                    <div className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors">
                        <div className="w-8 h-8 bg-sky-50 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Hotel className="w-4 h-4 text-sky-600" />
                        </div>
                        <span className="font-medium line-clamp-1">{data.hotel}</span>
                    </div>

                    <div className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors">
                        <div className="w-8 h-8 bg-cyan-50 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Plane className="w-4 h-4 text-cyan-600" />
                        </div>
                        <span className="font-medium line-clamp-1">{data.maskapai}</span>
                    </div>
                </div>
            </CardContent>

            <CardFooter className="pt-0">
                <Link href={data.url || "#"} className="w-full">
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-700 hover:to-sky-600 shadow-lg hover:shadow-xl transition-all group/btn">
                        <span>Lihat Detail</span>
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                </Link>
            </CardFooter>
        </Card>
    );
}