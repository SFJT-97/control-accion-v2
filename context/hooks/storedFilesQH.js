import { gql, useQuery } from '@apollo/client'

const getFileQ = gql`
query GetFile($filename: String!) {
  getFile(filename: $filename) {
    url
  }
}

`

export const useGetFile = (filename) => {
  if (filename === undefined) return
  console.log('filename=', filename)
  const name = filename.split('/').pop()
  console.log('name=', name)
  const { loading, error, data } = useQuery(getFileQ, { variables: { filename: name } })
  if (loading) return
  if (error) {
    console.error(error.message)
    return `Error... ${error}`
  }
  const result = data
  console.log('result\n', result)
  if (result && result !== 'Loading') {
    return result?.getFile?.url
  }
}

const getStoredFileQ = gql`
query GetStoredFile($filename: String!) {
  getStoredFile(filename: $filename) {
    filename
    mimetype
    encoding
    success
    message
    location
    url
  }
}

`

export const useGetStoredFile = (filename) => {
  if (filename === undefined) return
  const name = filename.split('/').pop()

  const { loading, error, data } = useQuery(getStoredFileQ, { variables: { filename: name } })

  if (loading) return
  if (error) {
    console.error(error.message)
    return `Error... ${error}`
  }
  const result = data
  console.log('data from useGetStoredFile\n', data)
  if (result && result !== 'Loading...') {
    return result?.getStoredFile
  }
}

const getFileURLQ = gql`
  query GetFileURL($filename: String!) {
    getFileURL(filename: $filename)
  }

`

export const useGetFileURL = (filename) => {
  if (filename === undefined) return
  const name = filename.split('/').pop()

  const { loading, error, data } = useQuery(getFileURLQ, { variables: { filename: name } })

  if (loading) return
  if (error) {
    console.error(error.message)
    return `Error... ${error}`
  }
  const result = data
  console.info('data from useGetFileURL\n', result)

  if (result && result !== 'Loading...') {
    return result?.getFileURL
  }
}
