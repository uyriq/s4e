import React, { useRef, useState } from 'react'
import download from 'downloadjs'
import { toPng } from 'html-to-image'

/**
 * Hook to generate screenshot
 */
function useScreenshot() {
    const captureRef1 = useRef()
    const captureRef2 = useRef()
    const [fileName, setFileName] = useState('undefined.PNG')
    const [status, setStatus] = useState('idle')
    let choiceRef

    const UUID = (function UUIDGeneratorBrowser() {
        return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11)
            .replace(/[018]/g, (c) =>
                (c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))).toString(16)
            )
            .split('-')[0]
    })()

    const curdate = (function getDate() {
        let d = new Date()
        let dformat = d.toISOString().split('T')[0]
        return '' + dformat
    })()
    console.log(UUID)
    async function generateImage(e, arg = 0, isRandomFname) {
        console.log(arg)

        e.preventDefault()

        switch (arg) {
            case 2: {
                choiceRef = captureRef2
                break
            }
            case 1:
            default: {
                choiceRef = captureRef1
                break
            }
        }

        if (!choiceRef?.current) {
            return
        }

        isRandomFname ? setFileName(UUID + '.png') : setFileName(curdate + '.png')
        try {
            setStatus('loading')
            const imgBase64 = await toPng(choiceRef.current, {
                quality: 1,
                pixelRatio: 1,
            })
            e.isTrusted && download(imgBase64, fileName)
            setStatus('success')
        } catch (error) {
            setStatus('error')
            console.error(error)
        } finally {
            choiceRef = null
        }
    }

    return {
        generateImage,
        captureRef1,
        captureRef2,
        status,
    }
}

export default useScreenshot
