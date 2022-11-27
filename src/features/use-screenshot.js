import React, { useRef, useState } from 'react'
import download from 'downloadjs'
import { toPng } from 'html-to-image'

/**
 * Hook to generate screenshot
 */
function useScreenshot() {
    const captureRef1 = useRef()
    const captureRef2 = useRef()
    let choiceRef
    let choiceFname
    const [status, setStatus] = useState('idle')

    const curdate = (function getDate() {
        let d = new Date()
        let dformat = d.toISOString().split('T')[0]
        return '_' + dformat
    })()
    //    console.log(curdate)
    const [fileName, setFileName] = useState(curdate + '.PNG')
    async function generateImage(e, arg = 1) {
        console.log(arg)

        e.preventDefault()

        switch (arg) {
            case 2: {
                choiceRef = captureRef2
                choiceFname = curdate + '_ХВ' + '.png'
                setFileName(choiceFname)
                break
            }
            case 1:
            default: {
                choiceRef = captureRef1
                choiceFname = curdate + '_ГВ' + '.png'
                setFileName(choiceFname)
                break
            }
        }

        if (!choiceRef?.current) {
            return
        }

        try {
            setStatus('loading')
            const imgBase64 = await toPng(choiceRef.current, {
                quality: 1,
                pixelRatio: 1,
            })

            download(imgBase64, fileName)
            setStatus('success')
        } catch (error) {
            setStatus('error')
            console.error(error)
        } finally {
            switch (arg) {
                case 2: {
                    choiceRef = captureRef2
                    choiceFname = curdate + '_ХВ' + '.png'
                    setFileName(choiceFname)
                    break
                }
                case 1:
                default: {
                    choiceRef = captureRef1
                    choiceFname = curdate + '_ГВ' + '.png'
                    setFileName(choiceFname)
                    break
                }
            }
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
