import { FileText, Download, Share, Eye } from "lucide-react"

const documents = [
  { id: 1, name: "Security+ Certificate.pdf", type: "Certificate", date: "Dec 15, 2024", size: "1.2 MB" },
  { id: 2, name: "Learning Progress Report.pdf", type: "Report", date: "Dec 10, 2024", size: "890 KB" },
  { id: 3, name: "CEH Study Notes.docx", type: "Notes", date: "Dec 8, 2024", size: "2.1 MB" },
  { id: 4, name: "Network Security Project.pdf", type: "Project", date: "Dec 5, 2024", size: "3.4 MB" },
]

export default function MyDocsContent() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-gray-900">My Docs</h1>

        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 bg-gray-50/50">
            <h2 className="text-lg font-semibold text-gray-900">Recent Documents</h2>
          </div>

          <div className="divide-y divide-gray-100">
            {documents.map((doc) => (
              <div key={doc.id} className="px-6 py-4 hover:bg-gray-50 transition-all duration-200 group">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                      <FileText className="w-6 h-6 text-blue-600" />
                    </div>

                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {doc.name}
                      </h3>
                      <div className="flex items-center space-x-4 mt-2">
                        <span className="text-xs font-medium text-green-700 bg-green-100 px-3 py-1 rounded-full">
                          {doc.type}
                        </span>
                        <p className="text-sm text-gray-500">{doc.date}</p>
                        <p className="text-sm text-gray-500">{doc.size}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
                      title="Preview"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                    <button
                      className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
                      title="Download"
                    >
                      <Download className="w-4 h-4" />
                    </button>
                    <button
                      className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
                      title="Share"
                    >
                      <Share className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Empty state for when no documents */}
        {documents.length === 0 && (
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-12 text-center">
            <FileText className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No documents yet</h3>
            <p className="text-gray-500">Upload your first document to get started.</p>
          </div>
        )}
      </div>
    </div>
  )
}
