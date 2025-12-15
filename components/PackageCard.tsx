import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Hotel, Plane } from "lucide-react";
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
        <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 bg-gray-200 relative">
                {/* Placeholder Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${data.image})` }}
                />
            </div>
            <CardHeader>
                <div className="text-sm text-primary font-semibold mb-1">{data.duration} Hari</div>
                <CardTitle className="text-xl">{data.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
                <div className="text-2xl font-bold text-primary">{data.price}</div>

                <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" /> {data.date}
                    </div>
                    <div className="flex items-center gap-2">
                        <Hotel className="w-4 h-4" /> {data.hotel}
                    </div>
                    <div className="flex items-center gap-2">
                        <Plane className="w-4 h-4" /> {data.maskapai}
                    </div>
                </div>
            </CardContent>
            <CardFooter>
                <Link href={data.url || "#"} className="w-full">
                    <Button className="w-full">Lihat Detail</Button>
                </Link>
            </CardFooter>
        </Card>
    );
}