


// export const GET = async () => {
//     try {
//         await db.user.create({
//             data: {
//                 email: "asdd33swsd",
//                 name: "ads3aswds",
//                 number: "1234536w278906", // Placeholder value for number
//                 password: "passwqword123" // Placeholder value for password
//             }
//         });

//         return NextResponse.json({
//             message: "User created successfully"
//         });
//     } catch (error) {
//         console.error("Error creating user:", error);
//         return NextResponse.error();
//     }
// };


import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../../lib/auth";

export const GET = async () => {
    try {
        const session = await getServerSession(authOptions);
        console.log("Session:", session);

        if (session && session.user) {
            return NextResponse.json({
                user: session.user
            });
        }

        return NextResponse.json({
            message: "You are not logged in"
        }, {
            status: 403
        });
    } catch (error) {
        console.error("Error retrieving session:", error);
        return NextResponse.json({
            message: "Internal Server Error"
        }, {
            status: 500
        });
    }
};
