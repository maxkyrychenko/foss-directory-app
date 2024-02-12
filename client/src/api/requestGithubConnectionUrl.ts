import fetchApiWithAuth from "./fetchApiWithAuth";

type Response = {url: string; CSRFToken: string};

const requestGithubConnectionUrl = async (): Promise<Response> => {
	const response = await fetchApiWithAuth("/integrations/github", {
		cache: "no-store"
	});
	return response.json();
};

export default requestGithubConnectionUrl;
