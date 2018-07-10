export const updateUser = user => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/users/${user.id}`,
    data: { user } // same as { user: user }
  });
};
