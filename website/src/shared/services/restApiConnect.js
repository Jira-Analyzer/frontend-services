getAll(page: number, searchName: String) {
  return this.http
    .get<{ data: IRequest, page: Page, success: boolean }>(
      environment.API_URL.concat("/api/v1/connector")
      .concat("/projects?")
      .concat("limit=10&page=")
      .concat(page)
      .concat("&search=")
      .concat(searchName)
  ).pipe(
    map((responseData) => responseData.data)
  );
}

constructor(private projectService: ProjectService){}
ngOnInit(): void {
  this.projectService.getAll(this.start_page, this.searchName).subscribe({
    next: projects => {
      this.projects = projects.data
      this.pageInfo = projects.pageInfo
    },
    error: error => {
      console.log(error);
      alert("При получении проектов возникла ошибка!\n\n".concat(error["error"]["message"]));
    }
  })
}
