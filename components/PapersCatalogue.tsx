import type { ContentSection } from "@/lib/json-content";
import { sectionId, splitCommaList } from "@/lib/json-content";
import { MarkdownParagraphs } from "./InlineContent";
import { WikiBadgeRow, WikiExternalLinkBadge } from "./WikiPrimitives";

export default function PapersCatalogue({ papers }: { papers: ContentSection[] }) {
  return (
    <table className="block w-full border-collapse text-sm xl:table">
      <caption className="sr-only">Unpublished papers and project reports</caption>
      <thead className="hidden xl:table-header-group">
        <tr className="border-y border-gray-300 bg-gray-100 text-left">
          {['Year', 'Paper', 'Status', 'Topics', 'Links'].map((label) => (
            <th key={label} scope="col" className="px-2 py-2 font-semibold">{label}</th>
          ))}
        </tr>
      </thead>
      <tbody className="block xl:table-row-group">
        {papers.map((paper) => (
          <tr
            key={sectionId(paper)}
            id={sectionId(paper)}
            className={`block border-b border-gray-200 py-3 align-top xl:table-row xl:py-0 ${paper.featured ? "bg-blue-50/50" : ""}`}
          >
            <td className="block px-2 py-1 text-gray-600 xl:table-cell xl:py-3">{paper.date}</td>
            <td className="block px-2 py-1 xl:table-cell xl:w-[55%] xl:py-3">
              {paper.featured && (
                <span className="mb-1.5 inline-block border border-blue-200 bg-white px-1.5 py-0.5 text-[11px] font-medium text-blue-800">Featured paper</span>
              )}
              <h3 className="font-semibold leading-snug text-blue-700">
                <a href={paper.websiteUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  {paper.title}
                </a>
              </h3>
              <p className="mt-1.5 text-xs leading-relaxed text-gray-600">
                {paper.authors?.map((author, index) => (
                  <span key={author}>
                    {index > 0 && "; "}
                    {author === "Yaseen Alkhameri" ? <strong className="font-semibold text-gray-800">{author}</strong> : author}
                  </span>
                ))}
              </p>
              <div className="mt-2 leading-relaxed text-gray-900">
                <MarkdownParagraphs text={paper.description} />
              </div>
            </td>
            <td className="block px-2 py-1 text-xs text-gray-600 xl:table-cell xl:py-3">
              <span className="inline-block border border-gray-300 bg-gray-50 px-1.5 py-0.5">{paper.status}</span>
            </td>
            <td className="block px-2 py-1 xl:table-cell xl:py-3">
              <WikiBadgeRow className="mt-0" tags={splitCommaList(paper.technologies)} />
            </td>
            <td className="block px-2 py-1 xl:table-cell xl:py-3">
              <div className="flex flex-wrap gap-1.5">
                {paper.websiteUrl && <WikiExternalLinkBadge href={paper.websiteUrl} label="PDF" />}
                {paper.githubUrl && <WikiExternalLinkBadge href={paper.githubUrl} label="Code" />}
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
