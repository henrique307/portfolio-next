type AlertStatus = "success" | "error" | "warning";

interface ShowAlertOptions {
  title?: string;
  message: string;
  status: AlertStatus;
  duration?: number;
}

const icons: Record<AlertStatus, string> = {
  success: `
    <svg xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6 shrink-0 stroke-current"
      fill="none"
      viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  `,
  error: `
    <svg xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6 shrink-0 stroke-current"
      fill="none"
      viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        d="M6 18L18 6M6 6l12 12" />
    </svg>
  `,
  warning: `
    <svg xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6 shrink-0 stroke-current"
      fill="none"
      viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        d="M12 9v2m0 4h.01M10.29 3.86l-8.59 14.92A1 1 0 002.59 21h18.82a1 1 0 00.87-1.52L13.71 3.86a1 1 0 00-1.72 0z" />
    </svg>
  `,
};

export function showAlert({
  title,
  message,
  status,
  duration = 3000,
}: ShowAlertOptions) {
  let container = document.getElementById("daisy-alert-container");

  if (!container) {
    container = document.createElement("div");
    container.id = "daisy-alert-container";
    container.className =
      "fixed top-5 left-1/2 -translate-x-1/2 z-50 w-full max-w-md px-4 space-y-3";
    document.body.appendChild(container);
  }

  const alert = document.createElement("div");

  const statusClass: Record<AlertStatus, string> = {
    success: "alert-success",
    error: "alert-error",
    warning: "alert-warning",
  };

  alert.setAttribute("role", "alert");
  alert.className = `
    alert ${statusClass[status]}
    shadow-lg transition-opacity duration-300
  `;

  alert.innerHTML = `
    ${icons[status]}
    <div class="flex flex-col">
      ${title ? `<span class="font-bold">${title}</span>` : ""}
      <span class="text-sm">${message}</span>
    </div>
  `;

  container.appendChild(alert);

  setTimeout(() => {
    alert.classList.add("opacity-0");
    setTimeout(() => alert.remove(), 300);
  }, duration);
}
