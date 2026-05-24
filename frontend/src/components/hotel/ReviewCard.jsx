export default function ReviewCard({ review }) {
  return (
    <div className="border border-gray-200 rounded-lg p-4">
      <div className="flex justify-between items-start mb-2">
        <div>
          <h4 className="font-semibold text-gray-900">{review.author}</h4>
          <p className="text-sm text-gray-600">{review.date}</p>
        </div>
        <span className="text-lg">{'⭐'.repeat(review.rating)}</span>
      </div>
      <p className="text-gray-700">{review.comment}</p>
    </div>
  );
}
