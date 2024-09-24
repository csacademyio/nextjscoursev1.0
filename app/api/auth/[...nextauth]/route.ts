import NextAuth from "next-auth";
import { authOptions } from "../authOptions";
//npm build error cannot use authOptions
//as a name so we put in a seperate module

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
