"use client";
import { ReactNode, useMemo } from "react";

import { getClient } from "@/sanity/lib/client";
import { LiveQueryProvider } from "@sanity/preview-kit";

// sanity preview document wrapper
export default function PreviewProvider({
    children,
    token,
}: {
    children: ReactNode;
    token: string;
}) {
    const client = useMemo(() => getClient({ token }), [token]);
    return (
        <LiveQueryProvider client={client}>
            {children}
        </LiveQueryProvider>
    );
}