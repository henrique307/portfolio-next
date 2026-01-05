import { useQuery, UseQueryResult } from "@tanstack/react-query";

export function useDriveContent(folder: Folder): UseQueryResult<DriveFile[], Error> {
    return useQuery({
        queryKey: ["drive", folder],
        queryFn: async () => {
            const res = await fetch(`/api/drive-media?folder=${folder}`);

            if (!res.ok) {
                throw new Error("Erro ao buscar ícones de idioma");
            }

            return res.json() as Promise<DriveFile[]>;
        },
        staleTime: 1000 * 60 * 10,
    });
}
