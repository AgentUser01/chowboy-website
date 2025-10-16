export default function UserAvatars() {
  const colors = [
    'bg-gradient-to-br from-sage to-sage-600',
    'bg-gradient-to-br from-icy to-icy-600',
    'bg-gradient-to-br from-mustard to-mustard-600',
    'bg-gradient-to-br from-sage-300 to-icy-300',
  ];

  return (
    <div className="flex items-center gap-4">
      <div className="flex -space-x-3">
        {colors.map((color, i) => (
          <div
            key={i}
            className={`w-10 h-10 rounded-full border-2 border-white ${color} flex items-center justify-center text-white font-bold text-sm shadow-lg`}
          >
            {String.fromCharCode(65 + i)}
          </div>
        ))}
      </div>
      <div>
        <p className="text-sm font-semibold text-slate-700">
          <span className="text-sage font-bold">15,000+</span> cooks using Chowboy
        </p>
        <div className="flex gap-1 text-xs">
          ⭐⭐⭐⭐⭐ <span className="font-semibold ml-1">4.8/5</span>
        </div>
      </div>
    </div>
  );
}

