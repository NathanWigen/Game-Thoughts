import api from './apiConfig';


export const postComment = async (id,commentData) => {
  const resp = await api.post(`/blogs/${id}/comments`, { comment: commentData });
  return resp.data;
}

export const destroyComment = async (id) => {
  const resp = await api.delete(`/blogs/${id}`);
  return resp;
}