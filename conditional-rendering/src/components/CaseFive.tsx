interface Badge {
  status: 'success' | 'info' | 'warning' | 'error';
}

const StatusBadge = ({status}:Badge) => {
    let styleClasses:string = "";
    let content:string = "";
    switch (status) {
        case "success":
            styleClasses = "bg-green-200 text-green-700";
            content = "Success";
            break;
        case "info":
            styleClasses = "bg-blue-200 text-blue-700";
            content = "Info";
            break;
        case "warning":
            styleClasses = "bg-yellow-200 text-yellow-700";
            content = "Warning";
            break;
        case "error":
            styleClasses = "bg-red-200 text-red-700";
            content = "Error";
            break;
    }

    return <span className={`${styleClasses} py-5 px-10 rounded`}>{content}</span>
}

const CaseFive = () => {
  return (
      <div className="flex flex-col gap-3">
          <StatusBadge status="success"/>
          <StatusBadge status="info"/>
          <StatusBadge status="warning"/>
          <StatusBadge status="error"/>
    </div>
  )
}

export default CaseFive