import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots{
    return{
        rules:[
        {
            userAgent: "*",
            allow: "/",
            disallow:"/pricing"
        },
        
    ],
    sitemap :"https://startupcheck.vercel.app/sitemap.xml"
};
}