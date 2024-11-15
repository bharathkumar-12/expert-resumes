// stores/resume.js
import { defineStore } from "pinia";
import { useRuntimeConfig } from "#imports";

export const useResumeStore = defineStore("resume", {
	state: () => ({
		pdfID: "", // Stores the ID of the created or fetched resume
		pdf: "", // Stores the PDF data
		showLoadingAnimation: false, // Controls the loading animation state
	}),

	getters: {
		pdfDataUrl: (state) => {
			return state.pdf && state.pdf.data
				? `data:application/pdf;base64,${state.pdf.data}`
				: "";
		},
	},

	actions: {
		async createResume(payload) {
			const runtimeConfig = useRuntimeConfig();
			try {
				const response = await fetch(
					`${runtimeConfig.public.apiBase}/api/resume`,
					{
						method: "POST",
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify(payload),
					}
				);

				if (!response.ok) {
					const errorText = await response.text();
					throw new Error(
						`Failed to create resume: ${response.status} - ${errorText}`
					);
				}

				const result = await response.json();
				this.pdfID = result._id;
				return { success: true, pdfID: this.pdfID };
			} catch (error) {
				console.error("Error creating resume:", error);
				return { success: false, error };
			}
		},

		async fetchResumePDF() {
			const runtimeConfig = useRuntimeConfig();
			if (!this.pdfID) {
				console.error("PDF ID not available");
				return;
			}

			try {
				this.showLoadingAnimation = true;

				const response = await fetch(
					`${runtimeConfig.public.apiBase}/api/resume/${this.pdfID}/pdf`
				);

				if (!response.ok) {
					const errorText = await response.text();
					throw new Error(
						`Failed to fetch PDF: ${response.status} - ${errorText}`
					);
				}

				const result = await response.json();
				if (result.pdfBase64 && result.fileName) {
					this.pdf = {
						data: result.pdfBase64,
						fileName: result.fileName,
					};
				} else {
					console.error("Invalid PDF response:", result);
				}
			} catch (error) {
				console.error("Error fetching PDF:", error);
			} finally {
				this.showLoadingAnimation = false;
			}
		},

		loadPdfFromLocalStorage() {
			try {
				const pdfData = localStorage.getItem("pdfData");
				if (pdfData) {
					this.pdf = JSON.parse(pdfData);
				}
			} catch (error) {
				console.error("Error loading PDF from local storage:", error);
			}
		},

		savePdfToLocalStorage() {
			try {
				if (this.pdf) {
					localStorage.setItem("pdfData", JSON.stringify(this.pdf));
				}
			} catch (error) {
				console.error("Error saving PDF to local storage:", error);
			}
		},
	},
});
