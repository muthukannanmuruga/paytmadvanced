import { NextResponse } from "next/server";
import db from "@repo/db/prismaclient";



export const GET = async () => {
    try {
        await db.user.create({
            data: {
                email: "asdd",
                name: "adsads",
                number: "12345678906", // Placeholder value for number
                password: "password123" // Placeholder value for password
            }
        });

        return NextResponse.json({
            message: "User created successfully"
        });
    } catch (error) {
        console.error("Error creating user:", error);
        return NextResponse.error();
    }
};
