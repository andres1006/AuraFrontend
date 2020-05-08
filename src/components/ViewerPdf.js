import React from 'react'
import PDFViewer from 'pdf-viewer-reactjs'
 
const ViewerPdf = ({url}) => {
    return (
        <PDFViewer
            document={{
                url,
            }}
        />
    )
}
 
export default ViewerPdf