export default function User({ user }: any) {
    const { id, name } = user;
    return (
        <>
            <div className="p-4 mb-4 text-sm text-blue-700 bg-blue-100 rounded-lg">
                <p className="font-medium">
                    {id}. {name}
                </p>
            </div>
        </>
    );
}