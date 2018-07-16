export const fetchAvails = () => {
  return $.ajax ({
    method: 'GET',
    url: '/api/avails'
  })
}

export const fetchAvail = (id) => {
  return $.ajax ({
    method: 'GET',
    url: `/api/avails/${id}`
  })
}

export const createAvail = (avail) => {
  return $.ajax ({
    method: 'POST',
    url: `/api/avails`,
    data: { avail }
  })
}
export const deleteAvail = id => (
  $.ajax({
    url: `api/avails/${id}`,
    method: 'DELETE'
  })
);
