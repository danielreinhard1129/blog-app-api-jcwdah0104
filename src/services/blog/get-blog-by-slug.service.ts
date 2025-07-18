import prisma from "../../config/prisma";
import { ApiError } from "../../utils/api-error";

export const getBlogbySlugService = async (slug: string) => {
  const blog = await prisma.blog.findFirst({
    where: { slug },
  });

  if (!blog) {
    throw new ApiError("blog not found", 404);
  }

  return blog;
};
