import NextAuth from "next-auth";
import { authOptions } from "./authOptions";

declare module "next-auth" {
	interface Session {
		accessToken: string;
	}

	interface User {
		accessToken: string;
	}
}
declare module "next-auth/jwt" {
	interface JWT {
		accessToken: string;
	}
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
