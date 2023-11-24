import type { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: AuthOptions = {
	providers: [
		CredentialsProvider({
			name: "credentials",
			credentials: {
				username: { type: "text", name: "username" },
				password: { type: "password", name: "password" },
			},
			async authorize(credentials) {
				if (
					credentials?.username === "test" &&
					credentials?.password === "test"
				) {
					return {
						id: "1",
						name: "test",
						email: "123",
						accessToken: "123",
					};
				} else {
					return null;
				}
			},
		}),
	],
};
