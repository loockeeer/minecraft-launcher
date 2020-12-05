import Axios from 'axios'
import walk from './walk'

export default async function downloadGame({url, path, fb}) {
    const files = []
    for await(const file of walk(path)) {
        const hash = await hasha.fromFile(fil, { algorithm: 'sha1' })
        files.push({
            relativePath: file.replace(folder.endsWith('/') ? folder : `${folder}/`, ''),
            hash
        })
    }

    const toDownloadFiles = await axios({
        url: `${url}/compare`,
        method: 'POST',
        data: { files }
    }).then(res => res.data).catch(res => { throw res?.body?.message })


    for(const toDownload of toDownloadFiles) {
        await fs.promises.mkdir(path.dirname(path.join(folder, toDownload.relativePath)), { recursive: true })
        const file = fs.createWriteStream(path.join(folder, toDownload.relativePath))

        http.get(`${url}/download/${toDownload.relativePath}`, res => {
            res.pipe(file)
            res.on('end', () => fb(toDownload.relativePath, toDownloadFiles.length))
        })
    }
}