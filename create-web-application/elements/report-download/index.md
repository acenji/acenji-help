# Report Download Element

The Report Download element allows users to generate and download PDF reports containing data from your application. This powerful element enables you to configure multiple data sources, select specific fields to include, and choose whether to include data from the current user only or all users. Report Download elements can be used in both **Web Cards** and **Mobile Cards**.

<p style="margin-top:50px;"></p>

![image1](../../../../images/cards/elements/report-download/report-download1.png)

<p style="margin-top:50px;"></p>

## It comes with the following attributes:

- **Button Text:** The label displayed on the download button. By default, this is set to "Download Report" but can be customized to match your application's needs.

- **Loading Text:** The text displayed while the report is being generated. Default is "Generating..." This provides feedback to users during the PDF creation process.

- **Report Title:** The title that appears at the top of the generated PDF document. This helps identify the report's purpose and content.

- **Include Timestamp:** When enabled, adds the current date and time to the report header, making it easy to track when the report was generated.

<p style="margin-top:50px;"></p>

![image2](../../../../images/cards/elements/report-download/report-download2.png)

<p style="margin-top:70px;"></p>

## Configuring Data Sources

The Report Download element uses a multi-source selection system that allows you to include data from multiple pages and tiles in a single report.

### User Scope

Choose which users' data to include in the report:

- **Current User Only:** The report will only contain data entered by the user who clicks the download button.
- **All Users:** The report will aggregate data from all users who have interacted with the selected sources.

<p style="margin-top:50px;"></p>

![image3](../../../../images/cards/elements/report-download/report-download3.png)

<p style="margin-top:50px;"></p>

### Adding Data Sources

Click the **"Add Source"** button to open the source selection modal. From here you can:

1. **Select a Page:** Choose which page contains the data you want to include.
2. **Select a Tile:** Pick the specific tile within that page.
3. **Select Fields:** Check the fields you want to include in the report.

<p style="margin-top:50px;"></p>

![image4](../../../../images/cards/elements/report-download/report-download4.png)

<p style="margin-top:50px;"></p>

### Managing Multiple Sources

After adding a source, it appears in the sources list showing:
- The page name
- The tile name
- The number of fields selected

You can:
- **Edit** a source by clicking the pencil icon
- **Remove** a source by clicking the X icon
- **Add more sources** by clicking "Add Source" again

<p style="margin-top:50px;"></p>

![image5](../../../../images/cards/elements/report-download/report-download5.png)

<p style="margin-top:70px;"></p>

## Generated PDF Structure

The downloaded PDF includes:

1. **Header:** Report title and optional timestamp
2. **Data Sections:** One section per data source, organized by page and tile
3. **Field Values:** Each selected field with its label and value
4. **Footer:** "powered by ACENji.com a Super App - The NoCode Super Builder for Web & native mobile apps"

<p style="margin-top:50px;"></p>

## Tips for Using Report Download

1. **Plan your data structure:** Before adding the Report Download element, ensure your pages and tiles are organized logically so the report makes sense.

2. **Use descriptive field labels:** The labels you set for your form fields will appear in the PDF, so make them clear and professional.

3. **Consider user scope carefully:** "All Users" reports can contain large amounts of data. Use this option when you need aggregated data for analysis or management review.

4. **Test with sample data:** Always test your report configuration with actual data to ensure it displays correctly before publishing your application.

<p style="margin-top:70px;"></p>


# Questions?

If you have any questions, please don't hesitate to <a href="https://www.acenji.com/contact" target="_blank" rel="noopener">contact us.</a>
Alternatively, you can submit an issue on this <a href="https://github.com/acenji/acenji-help/issues" target="_blank" rel="noopener">platform.</a>
<p style="margin-top:30px;"></p>


# Useful Links:

<span class="triangle"></span> What is the Button Element? - https://help.acenji.com/#/./create-web-application/elements/button/index
<span class="triangle"></span> Using the Card List Element - https://help.acenji.com/#/./create-web-application/elements/card-list/index
<span class="triangle"></span> Learn about the Info Element - https://help.acenji.com/#/./create-web-application/elements/info/index

<style>
.triangle {
display: inline-block;
width: 0;
height: 0;
border-style: solid;
border-width: 5px 0 5px 5px;
border-color: transparent transparent transparent #595959;
margin-left: 10px;
}
</style>
<p style="margin-top:30px;"></p>


# Was this article helpful?

<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSczNju0lskuQsjUjVs5YTRWKVczJlFIEVyjhgxDkvrN655N6w/viewform?embedded=true" width="640" height="300" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
