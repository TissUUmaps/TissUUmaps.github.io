# Gallery

Every folder here is one project of the Gallery page of the website. Folders starting with `_` are not shown.

## Add a project

1. Make a screenshot of the project in TissUUmaps, cropped to 16:10 (for example 800 × 500 pixels), without the side panel.
2. On GitHub, open this folder and choose **Add file > Create new file**. Name it `YYYY-MM-DD-my-project/index.md`: today's date, then a short name with lowercase letters and dashes, for example `2026-10-12-mouse-brain/index.md`. The newest projects are shown first.
3. Copy the contents of [`_template/index.md`](_template/index.md) into it and fill in the fields (see below).
4. Upload the screenshot into the new folder as `thumbnail.jpg` (**Add file > Upload files**).
5. Commit to a new branch and open a pull request. Its checks build the website; a missing field fails them with a message that names the file and the field. Once the pull request is merged, the website is updated within a few minutes.

## Fields

| Field           | What to write                                                      |
| --------------- | ------------------------------------------------------------------ |
| `title`         | Short name of the project                                          |
| `description`   | One or two sentences for the card                                  |
| `image`         | `./thumbnail.jpg`                                                  |
| `project`       | Link to the project file (`.tm4`); the card opens it in TissUUmaps |
| `tags`          | Technologies and formats, in square brackets, separated by commas  |
| `data_provider` | Who made the data available                                        |
| `data_url`      | Where the data comes from                                          |
| `data_license`  | The license of the data, for example `CC BY 4.0`                   |

The text below the fields is optional. It appears on the project's own page and can use [Markdown](https://www.markdownguide.org/basic-syntax/): paragraphs, **bold**, links, lists and images.
