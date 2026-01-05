import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";
import { handleFolder } from "@/app/utils/handleFolder";

export async function GET(req: NextRequest) {
  const folder = req.nextUrl.searchParams.get("folder")

  const folderId = handleFolder(folder);

  if (!folderId) {
    return NextResponse.json({ error: "Pasta inexistente." }, { status: 404 });
  }

  try {
    const auth = new google.auth.JWT({
      email: process.env.GOOGLE_CLIENT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      scopes: ["https://www.googleapis.com/auth/drive.readonly"]
    });

    const drive = google.drive({ version: "v3", auth });

    const res = await drive.files.list({
      q: `'${folderId}' in parents and trashed=false`,
      fields: "files(id, name, mimeType, thumbnailLink, webContentLink)",
      pageSize: 100
    });

    return NextResponse.json(res.data.files);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Erro interno ao acessar o Drive" }, { status: 500 });
  }
}
