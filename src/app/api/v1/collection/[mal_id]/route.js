import prisma from "@/service/prisma";
import { getUser } from "@/service/auth-service";
export async function DELETE(request, { params: { mal_id } }) {
  const user = await getUser();
  const id = parseInt(mal_id);
  const deleteCollection = await prisma.collection.delete({
    where: {
      user_email: user?.email,
      mal_id: id,
    },
  });
  if (!deleteCollection) {
    return Response.json({ status: 500, isCreated: false });
  } else return Response.json({ status: 200, isCreated: true });
}
